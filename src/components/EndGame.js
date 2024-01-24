import React, { useState } from "react";
import LostGame from "./LostGame";

const EndGame = ({ gamePhase, hasLost, setHasLost }) => {

  const [isPlaying, setIsPlaying] = useState(true);

  function gameRetry(){
    gamePhase('game');
    setHasLost(false);
  }

  return (
    <div className="game-end">
      { (hasLost && isPlaying ? <LostGame isPlaying={setIsPlaying}/> : '')}
      <div className="end-screen" style={{ display: (hasLost && isPlaying ? "none" : "") }}>
        <div className="game-fade"></div>
        <h2>The game has finished.</h2>
        <div className="game-options">
          <button type="button" className="game-home" onClick={() => { gamePhase('menu'); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
          </button>
          <button type="button" className="game-retry" onClick={() => { gameRetry(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
            </svg>
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
