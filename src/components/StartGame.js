import React, { useEffect, useRef } from 'react';
import domainExpansion from '../assets/video/domain_expansion.mp4';

const StartGame = ( { gamePhase } ) => {

    const startVideo = useRef(null);

    useEffect(()=>{

        let video = startVideo.current;

        // Reproduce el video
        video.play();

        // Verifica si el video ha terminado
        video.addEventListener('ended', () => {
            gamePhase('game')
        });
    });

    return (
        <div className='game-start'>
            <div className="video-gradient-left"></div>
            <video src={domainExpansion} className='game-video' ref={startVideo}></video>
            <div className="video-gradient-right"></div>
        </div>
    )
}

export default StartGame