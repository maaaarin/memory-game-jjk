import React, { useEffect,  useState } from "react";

// Componentes
import Card from "./Card";

// Estilos
import "../css/Game.css";

// Multimedia
import audioFlip from "../assets/sound/flip.mp3";
import audioMatch from "../assets/sound/match.mp3";
import audio0 from "../assets/sound/0.mp3";
import audio5 from "../assets/sound/5.mp3";
import audio8 from "../assets/sound/8.mp3";
import audioAmbient from "../assets/sound/ambient.mp3";

// Sonidos
var flipCard = new Audio(audioFlip),
    soundMatch = new Audio(audioMatch),
    sound0 = new Audio(audio0),
    sound5 = new Audio(audio5),
    sound8 = new Audio(audio8),
    soundAmbient = new Audio(audioAmbient);

var matchSounds = [sound0, null, null, null, null, sound5, null, null, sound8];

// Cartas
var cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Game = ( { gamePhase, hasLost, gameMode, timer, setTimer } ) => {

    const [isDisordered, setIsDisordered] = useState(false);

    // Desordenar cartas
    function disorderCards(arr) {
    
        let newCards = arr;
    
        for (let i = cards.length - 1; i > 0; i--) {
        // i = 20
        const ranPosition = Math.floor(Math.random() * (i - 1));
        //
        const temp = newCards[i]; // i: 20 x: 9
        newCards[i] = newCards[ranPosition]; // i: 20 (9) = i:4(3);
        newCards[ranPosition] = temp; // i: 4 (3) = 20 (9)
        }
    
        setIsDisordered(true);
    
        return newCards;
    }
    

    // Reproduce un sonido específico
    function playSound(value){
        if (matchSounds[value] != null){
            matchSounds[value].play();
        } else {
            soundMatch.play();
        }
    }

    // Desactiva poder seleccionar las cartas
    function unableSelect() {
        let cardsElements = Array.from(document.getElementsByClassName("card"));

        cardsElements.forEach(card => {
            if (
                !card.classList.contains("selected") &&
                !card.classList.contains("matched")
            ) {
                card.classList.toggle("unselectable");
            }
        });
    }

    // Selección de cartas
    var [selected, setSelected] = useState(false),
        [previousCard, setPreviousCard] = useState(null);

    // Número de pares
    var [pairs, setPairs] = useState(cards.length / 2);

    // Cuenta atrás
    var timerSeconds,
        timerMinutes;

    // Segundos
    timerSeconds = Math.floor(timer % 60);

    // Minutos
    timerMinutes = Math.floor((timer % 3600) / 60);

    useEffect(() => {

        // Desordenar cartas
        if(!isDisordered){
            disorderCards(cards);
        }

        let timerCount;

        // Reduce tiempo del contador
        if (timer > 0){
            timerCount = setTimeout(() => {
            setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            // Finaliza el juego
            soundAmbient.pause();
            hasLost(true);
            gamePhase('end-game');
        }

        return () => clearTimeout(timerCount);
    }, [timer, gamePhase, hasLost, isDisordered]);
    
    // Selecciona una carta
    function selectCard(e) {
        flipCard.play();

        if (!flipCard.ended) {
            flipCard.currentTime = 0;
        }

        let currentCard = e.currentTarget;

        // Clases a la tarjeta seleccionada
        currentCard.classList.add("selected", "unselectable");

        if (selected) {
        // Desactiva poder seleccionar otras cartas
        unableSelect();

        // Comprueba el intento
        if (previousCard.value === currentCard.value) {

            // Acierto
            playSound(currentCard.value);

            previousCard.classList.add("matched");
            currentCard.classList.add("matched");

            // Elimina las clases a las tarjetas seleccionadas
            previousCard.classList.remove("selected");
            currentCard.classList.remove("selected");
            unableSelect();

            // Reduce el número de pares
            setPairs((pairs -= 1));

            // Verifica si el juego ha terminado
            if (pairs < 1) {
                // Finaliza el juego
                soundAmbient.pause();
                gamePhase('end-game');
                hasLost(false);
            }
        } else {

            // Fallo

            // Elimina las clases a las tarjetas seleccionadas
            setTimeout(() => {
            previousCard.classList.remove("selected");
            currentCard.classList.remove("selected");
            unableSelect();
            }, (gameMode !== 'normal' ? 400 : 600));
        }

        // Deselecciona las cartas
        setSelected(false);
        return;
        }

        // Guarda la carta selecionada
        setPreviousCard(currentCard);
        setSelected(true);
    }

    return (
        <div className="game" style={{ backgroundImage: "url('/images/domain_expansion.webp')" }}>
           <audio src={audioAmbient} autoPlay={true} loop={true}></audio>
           <div className="game-inner">
                <div className="game-fade"></div>
                <div className="game-board">
                    <div className="game-info">
                    <div className="timer">
                        Time:{" "}
                        {timerMinutes.toString().padStart(2, "0") +
                        ":" +
                        timerSeconds.toString().padStart(2, "0")}
                    </div>
                    <div className="pairs">Pairs: {pairs}</div>
                    </div>
                    <ul className="cards">
                    {cards.map((card, i) => {
                        return (
                        <Card card={card} key={i} onSelectCard={(e) => selectCard(e)} />
                        );
                    })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Game;
