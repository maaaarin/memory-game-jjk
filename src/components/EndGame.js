import React, { useState } from "react";
import LostGame from "./LostGame";

const EndGame = ({ gamePhase, hasLost }) => {

  const [isPlaying, setIsPlaying] = useState(true);

  function gameRetry(){
    gamePhase('game');
  }

  return (
    <div className="game-end">
      { (hasLost && isPlaying ? <LostGame isPlaying={setIsPlaying}/> : '')}
      <div className="end-screen" style={{ display: (hasLost && isPlaying ? "none" : "") }}>
        <div className="game-fade"></div>
        <h2>The game has finished.</h2>
        <button type="button" className="game-retry" onClick={() => { gameRetry(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
          </svg>
          Retry
        </button>
      </div>
    </div>
  );
};

export default EndGame;
