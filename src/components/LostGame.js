import React, { useEffect, useRef } from 'react'
import gameLost from '../assets/video/lost.mp4';


const LostGame = ( { isPlaying } ) => {

    const videoLost = useRef(null);

    useEffect(() => {
        
        let video = videoLost.current;
        
        video.addEventListener('ended', () => {
            isPlaying(false);
        });
    });

  return (
    <div className="game-lost">
        <div className="video-gradient-left"></div>
        <video src={gameLost} ref={videoLost} className="video-lost" autoPlay={true}></video>
        <div className="video-gradient-right"></div>
    </div>
  )
}

export default LostGame