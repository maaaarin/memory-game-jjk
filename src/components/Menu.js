import React, {  useRef, useState } from 'react'
import menuAudio from '../assets/sound/menu.mp3';

const Menu = ( { gamePhase, gameMode } ) => {

    const [songPaused, setSongPaused] = useState(true),
            [isPlaying, setIsPlaying] = useState(false),
            [hasStarted, setHasStarted] = useState(false);

    const menuSong = useRef(null);
        
    function musicControls(){

        setIsPlaying(true);

        if (!songPaused){
            menuSong.current.pause();
            setSongPaused(true);
        } else {
            menuSong.current.play();
            setSongPaused(false);
        }
    }
    
    // Inicia el juego
    return (
        <div className='game-menu'>
            <div className="menu-social">
                <span>Made by: Marín</span>
                <a href="https://github.com/andresmarinn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </a>
            </div>
            <div className="menu-music" onClick={() => { musicControls(); }}>
                <audio src={menuAudio} ref={menuSong} loop={true}></audio>
                { !isPlaying &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                        <path fill-rule="evenodd" d="M9 3v10H8V3z"/>
                        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/>
                    </svg>       
                }
                { songPaused && isPlaying ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
                    </svg> : ''
                }
                { !songPaused && isPlaying ?    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
                        <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
                    </svg> : ''
                }
            </div>
            <div className="game-title">
                <img src="./images/suku_eyes.webp" alt='img'/>
                <h1>Jujutsu Kaisen</h1>
                <h2>Memory Game</h2>
            </div>
            <div className="game-start">
                { !hasStarted && 
                <button type="button" onClick={() =>{ setHasStarted(true); }} className='start-button'>Start Game</button>
                } 
                { hasStarted && 
                <div className="game-modes" >
                    <button type="button" onClick={() =>{ gameMode('normal'); gamePhase('start-game') }} className='normal-mode'>Normal</button>
                    <button type="button" onClick={() =>{ gameMode('crazy'); gamePhase('start-game') }} className='crazy-mode'>Crazy</button>
                </div>                
                }
                
            </div>
            <div className="credits">
                <span className='credits-label'>Card Illustrations by: </span>
                <span className="credits-name"> AltoRosa </span> 🦊✨
            </div>
            <img src="./images/lizard.gif" className='lizard' alt='img'/>
            <div className="party-lights"></div>
        </div>
    )
}

export default Menu