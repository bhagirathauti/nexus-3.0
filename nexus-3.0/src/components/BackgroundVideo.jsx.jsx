import React from 'react';
import { useEffect, useState } from 'react';

const BackgroundVideo = () => {
    return (
        <>
            <section className="bgvideo">
                <video
                    className="videoBackground"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/public/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="contentOverlay">
                        <h1>Welcome to Global Institute of Technology</h1>
                        <p>
                            The Global Institute of Technology (GIT) stands as a beacon of innovation, learning, and excellence, shaping the future of countless students since its inception. Nestled in the serene outskirts of the city, GIT offers an inspiring environment where knowledge meets innovation. Our sprawling campus is not just an educational hub but a community that nurtures creativity and intellectual growth.
                        </p>
                        <p>
                            At GIT, we believe in empowering students with the skills and knowledge they need to excel in a rapidly evolving world. With state-of-the-art laboratories, modern libraries, and highly qualified faculty, we ensure that every student has the resources they need to succeed. Our curriculum is designed to blend theoretical foundations with hands-on experience, preparing students to tackle real-world challenges with confidence.
                        </p>
                        <p>
                            We take pride in our diverse student body and our inclusive approach to education. GIT welcomes students from all walks of life, fostering a culture of collaboration and mutual respect. From engineering and technology to arts and management, our wide range of programs ensures that every passion finds its path at GIT.
                        </p>
                        <p>
                            Beyond academics, GIT offers a vibrant array of extracurricular activities, including clubs, sports, and cultural events that provide students with holistic growth opportunities. With a strong focus on research and innovation, we encourage students to think beyond the conventional and contribute meaningfully to society.
                        </p>
                </div>
            </section>
        </>
    );
};

export default BackgroundVideo;