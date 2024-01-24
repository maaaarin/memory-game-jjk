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
            <button className="video-skip" onClick={()=> { gamePhase('game') }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-end-fill" viewBox="0 0 16 16">
                    <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z"/>
                </svg>
            </button>
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