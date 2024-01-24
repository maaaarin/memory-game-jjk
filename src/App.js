import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Game from './components/Game';
import StartGame from './components/StartGame';
import EndGame from './components/EndGame';

function App() {

    const [gamePhase, setGamePhase] = useState('menu'),
          [hasLost, setHasLost] = useState(false),
          [gameMode, setGameMode] = useState('normal');

    return (
      <div className="App">
        { gamePhase === "menu" && <Menu gamePhase={setGamePhase} gameMode={setGameMode} />}
        { gamePhase === "start-game" && <StartGame gamePhase={setGamePhase} gameMode={gameMode} /> }
        { gamePhase === "game" && <Game gamePhase={setGamePhase} hasLost={setHasLost} gameMode={gameMode}/> }
        { gamePhase === "end-game" && <EndGame gamePhase={setGamePhase} hasLost={hasLost} setHasLost={setHasLost}/> }
      </div>
    );
}

export default App;
