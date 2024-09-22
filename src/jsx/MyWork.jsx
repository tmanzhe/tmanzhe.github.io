import React, { useEffect, useRef } from 'react';
import ITMZLogo from '../assets/company logo/ITMZ.png';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import '../css/MyWork.css';

function MyWork() {
    const timelineRef = useRef(null);

    useEffect(() => {
        const timelineElements = document.querySelectorAll('.timeline-component, .timeline-middle');
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );
    
        timelineElements.forEach((element) => observer.observe(element));
    
        return () => observer.disconnect();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section id = "my-work" className="design-section" ref={timelineRef}>
            <h1 className = "my-work-text">my work</h1>

            <div className="timeline">
                {/* Empty div for spacing */}
                <div className="timeline-empty"></div>

                {/* Timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                {/* Timeline content components */}
                <div className="timeline-component timeline-content">
                    <h2>mobile dev intern @ ITMZ</h2>
                    <small> june 2024 - present </small>
                    <p>during my internship at itmz, i focused on enhancing the front-end user experience by designing and deploying innovative ui features in a timely and organized manner within a fast-paced startup environment using <b>flutter and dart. </b> these contributions significantly improved product capabilities and optimized user interactions.</p>
                    <p>i worked with <b>aws dynamodb and aws s3</b> to develop and optimize data retrieval and display systems, managing custom content permissions to ensure seamless integration with front-end components, secure data handling, and enhanced data accessibility.</p>
                    <p>i was tasked with creating numerous features from scratch, identifying and solving bugs, and collaborating with cross-functional teams to implement performance enhancements that drove efficiency and increased user engagement.</p>
                    <p>fun fact: since our app is powered by gemini, we participated in the gemini ai competition. we are currently in the process of awaiting results</p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>
                </div>

                <div className="timeline-component timeline-content">
                    <h2>Self-Driving Car Using Neural Network</h2>
                    <small> may 2024 - present </small>
                    <p>i started this project due to my keen interest in ai cars in shanghai. fortunately, by following resources online, i was able to develop a <b>self-driving car simulation</b> from using no libraries in <b>javascript</b>, incorporating essential components such as <b>car driving physics</b>, which also involved implementing core movement and control systems.</p> 
                    <p>it includes <b>driving environments</b> and <b>road structures</b>, along with <b>artificial sensors</b> for data collection and decision-making. additionally, <b>algorithms for collision detection</b> were implemented, and various <b>traffic scenarios</b> were simulated to test car behavior under different conditions.</p> 
                    <p>a key aspect of the project was the implementation of a <b>neural network</b> for <b>autonomous driving</b>, which involved visualizing its operations and tracking performance improvements. i utilized <b>parallel computing</b> and <b>genetic algorithms</b> to enhance the learning process.</p> 
                    <p>currently, i am focused on advancing this project by creating a sophisticated <b>virtual environment</b> from scratch using <b>html</b>, <b>css</b>, and <b>javascript</b>. this includes implementing <b>dijkstra’s algorithm</b> for efficient pathfinding and integrating <b>real-world data</b> to create realistic cityscapes.</p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>
                </div>

                {/* Timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-empty"></div>
                <div className="timeline-empty"></div>

                {/* Another timeline middle with circle */}
                <div className="timeline-middle">
                    <div className="timeline-circle"></div>
                </div>

                <div className="timeline-component timeline-content">
                    <h2>Virtual Mouse</h2>
                    <small> april 2024 - present </small>
                    <p> this project utilizes <b>opencv</b> and <b>mediapipe</b> to detect the location of the hand and is coded in python. by tracking the index finger, the system calculates the <b>euclidean distance</b> between specific points on the hand in each frame. when the distance meets a predefined threshold, a command can be executed.</p> 
                    <p>the implementation involves creating a mouse controller instance and capturing real-time video streams to identify hand landmarks. gestures such as left-click, right-click, double-click, and screenshot are recognized based on specific angles and distances between the thumb and index finger.</p>
                    <p>since it was one of my first projects involving <b>ai</b> and <b>human-computer interaction (hci)</b>, the final product of the virtual mouse is functional, but not in its final stages.</p>
                    <p>in the future, i want to be able to make this interactive in 3d enviroments like unity</p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>
                
                </div>

                <div className="timeline-component timeline-content">
                    <h2>IDK Last Project</h2>
                    <small> 2024-2024 </small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis, iusto id incidunt dolores blanditiis perferendis rerum nihil autem repudiandae, et distinctio? Possimus neque quidem ut dolorem, facere repellendus esse.</p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyWork;
