import React, { useEffect, useRef } from 'react'
import winVideo from '../assets/video/win.mp4';

const WinGame = ( { isPlaying } ) => {

    const videoWin = useRef(null);

    useEffect(() => {
        let video = videoWin.current;
        video.addEventListener('ended', () => {
            isPlaying(false);
        });
    });

  return (
    <div className="game-win">
        <div className="video-gradient-left"></div>
        <video src={winVideo} ref={videoWin} className="game-video" autoPlay={true}></video>
        <div className="video-gradient-right"></div>
    </div>
  )
}

export default WinGame