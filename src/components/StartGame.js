import React, { useEffect, useRef } from 'react';
import video_normal from '../assets/video/game_normal.mp4';
import video_crazy from '../assets/video/game_crazy.mp4';

const StartGame = ( { gamePhase, gameMode } ) => {

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
        <div className='game-video-start'>
            <div className="video-gradient-left"></div>
            { gameMode !== 'normal' ?
            <video src={video_crazy} className='game-video' ref={startVideo}></video>
            :    
            <video src={video_normal} className='game-video' ref={startVideo}></video>
            }
            <div className="video-gradient-right"></div>
        </div>
    )
}

export default StartGame