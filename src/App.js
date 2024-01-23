import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Game from './components/Game';
import StartGame from './components/StartGame';
import EndGame from './components/EndGame';

function App() {

    const [gamePhase, setGamePhase] = useState('menu'),
          [hasLost, setHasLost] = useState(false);

    return (
      <div className="App">
        { gamePhase === "menu" && <Menu gamePhase={setGamePhase} />}
        { gamePhase === "start-game" && <StartGame gamePhase={setGamePhase} /> }
        { gamePhase === "game" && <Game gamePhase={setGamePhase} hasLost={setHasLost}/> }
        { gamePhase === "end-game" && <EndGame gamePhase={setGamePhase} hasLost={hasLost}/> }
      </div>
    );
}

export default App;
