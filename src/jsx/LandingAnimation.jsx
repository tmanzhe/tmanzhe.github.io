import React from 'react';
import '../css/LandingAnimation.css';

function LandingAnimation() {
    const scrollToAbout = () => {
        const element = document.getElementById("about-me");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="landing-wrapper">
            <h1>welcome to my portfolio.</h1>
            <div className="box">
                {[...Array(20)].map((_, index) => (
                    <div className={`shard shard-${index + 1}`} key={index}></div>
                ))}
            </div>
            <div className="scroll-arrow" onClick={scrollToAbout}>
                ⬇
            </div>
        </div>
    );
};

export default LandingAnimation;
