import React, { useEffect, useState } from "react";
import LostGame from "./LostGame";

const EndGame = ({ hasLost }) => {

  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="game-end">
      { (hasLost && isPlaying ? <LostGame isPlaying={setIsPlaying}/> : '')}
      <div className="end-screen" style={{ display: (hasLost && isPlaying ? "none" : "") }}>
        <div className="game-fade"></div>
        <h2>The game has finished.</h2>
      </div>
    </div>
  );
};

export default EndGame;
