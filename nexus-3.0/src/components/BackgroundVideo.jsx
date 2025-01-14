import React, { useRef, useEffect } from 'react';
import "../Stylesheets/BackgroundVideo.css";

const BackgroundVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => {
            if (video.currentTime >= 5) {
                video.currentTime = 0;
                video.play();
            }
        };
        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <section className="bgvideo">
            <video
                ref={videoRef}
                className="videoBackground"
                autoPlay
                muted
                playsInline
            >
                <source src="/public/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="contentOverlay">
                <div className="textCard">
                    <h1 className="modernText">
                        Global{"\n"}Institute{"\n"}of{"\n"}Technology
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default BackgroundVideo;
