import React, { useEffect, useRef } from 'react';
import ITMZLogo from '../assets/demo/itmz.png';
import Clicker from '../assets/demo/clicker.png';
import VirtualMouse from '../assets/demo/virtual-mouse.png';
import DriveOne from '../assets/demo/drive-1.png';
import DriveTwo from '../assets/demo/drive-2.png';
import Mad from '../assets/demo/mad.png';
import WebsiteCode from '../assets/demo/website-code.jpg';
import gem from '../assets/demo/gemini.png';
import Dynamob from '../assets/logos/amazondynamodb.svg';
import Java from '../assets/logos/java.svg';
import MediaPipe from '../assets/logos/mediapipe.svg';
import { SiAwsamplify } from 'react-icons/si';
import { SiXcode } from 'react-icons/si';
import { SiAndroidstudio } from 'react-icons/si';
import { SiGooglegemini } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiOpencv } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiVite } from 'react-icons/si';
import { SiFlutter, SiDart } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';



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

            <div className="work-icons-row">
                <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">
                    <SiAwsamplify className="work-icon" style={{ color: '#FF9900' }} />
                </a>
                <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
                    <SiXcode className="work-icon" style={{ color: '#1575F9' }} />
                </a>
                <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                    <SiAndroidstudio className="work-icon" style={{ color: '#3DDC84' }} />
                </a>
                <a href="https://gemini.google/advanced/?hl=en-CA" target="_blank" rel="noopener noreferrer">
                    <SiGooglegemini className="work-icon" style={{ color: '#4285F4' }} />
                </a>
                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                    <SiJavascript className="work-icon" style={{ color: '#F7DF1E' }} />
                </a>
                <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                    <SiHtml5 className="work-icon" style={{ color: '#E34F26' }} />
                </a>
                <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                    <SiCss3 className="work-icon" style={{ color: '#1572B6' }} />
                </a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                    <SiPython className="work-icon" style={{ color: '#3776AB' }} />
                </a>
                <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
                    <SiOpencv className="work-icon" style={{ color: '#5C3EE8' }} />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <SiReact className="work-icon" style={{ color: '#61DAFB' }} />
                </a>
                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                    <SiVite className="work-icon" style={{ color: '#646CFF' }} />
                </a>
                <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
                    <SiFlutter className="work-icon" style={{ color: '#02569B' }} />
                </a>
                <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
                    <SiDart className="work-icon" style={{ color: '#0175C2' }} />
                </a>
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                    <SiVisualstudiocode className="work-icon" style={{ color: '#007ACC' }} />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                    <SiGit className="work-icon" style={{ color: '#F05032' }} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="work-icon" style={{ color: '#181717' }} />
                </a>
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                    <SiFigma className="work-icon" style={{ color: '#F24E1E' }} />
                </a>
                <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer">
                    <img src={Dynamob} alt="DynamoDB" className="work-icon" />
                </a>
                <a href="https://ai.google.dev/edge/mediapipe/solutions/guide#legacy" target="_blank" rel="noopener noreferrer">
                    <img src={MediaPipe} alt="MediaPipe" className="work-icon" />
                </a>
                <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Java} alt="Java" className="work-icon" />
                </a>
            </div>


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

                    <p>during my internship at itmz, i enhanced user experiences by designing and deploying innovative <strong>ui features</strong> with <strong>flutter</strong> and <strong>dart</strong>. these contributions significantly improved product capabilities.</p>

                    <p>i collaborated with backend components using <strong>aws dynamodb</strong> and <strong>aws s3</strong>. my focus was on connecting and tweaking systems for better data retrieval and managing custom content permissions for secure data handling.</p>

                    <p>i created features from scratch and identified bugs, including issues like identifying and optimizing internet connectivity. i also collaborated with cross-functional teams to implement efficiency enhancements.</p>

                    <p>fun fact: as our app is powered by <strong>gemini</strong>, we participated in the <strong>gemini ai competition</strong> and are currently awaiting the results.</p>

                    
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={ITMZLogo} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={gem} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>

                    <div className="tech-logos">
                        <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
                            <SiFlutter className="tech-logo" style={{ color: '#02569B' }} />
                        </a>
                        <a href="https://dart.dev/" target="_blank" rel="noopener noreferrer">
                            <SiDart className="tech-logo" style={{ color: '#0175C2' }} />
                        </a>
                        <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">
                            <SiAwsamplify className="tech-logo" style={{ color: '#FF9900' }} />
                        </a>
                        <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
                            <SiXcode className="tech-logo" style={{ color: '#1575F9' }} />
                        </a>
                        <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
                            <SiAndroidstudio className="tech-logo" style={{ color: '#3DDC84' }} />
                        </a>
                        <a href="https://gemini.google/advanced/?hl=en-CA" target="_blank" rel="noopener noreferrer">
                            <SiGooglegemini className="tech-logo" style={{ color: '#4285F4' }} />
                        </a>
                        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                            <SiFigma className="tech-logo" style={{ color: '#F24E1E' }} />
                        </a>
                        <a href="https://aws.amazon.com/dynamodb/" target="_blank" rel="noopener noreferrer">
                            <img src={Dynamob} alt="AWS DynamoDB Logo" className="tech-logo" />
                        </a>
                    </div>


                </div>

                <div className="timeline-component timeline-content">
                    <h2>Self-Driving Car Using Neural Network</h2>
                    <small> may 2024 - present </small>

                    <p>i started this project after visiting shenzhen and seeing self-driving cars. inspired i used online resources to help me replicate a <strong>self-driving car simulation</strong> in <strong>javascript</strong> without any libraries. this involved incorporating essential components like <strong>car driving physics</strong> and core movement control systems.</p>  
                    <p>the simulation features <strong>driving environments</strong> and <strong>road structures</strong>. it includes <strong>artificial sensors</strong> for data collection and decision-making. i implemented <strong>collision detection algorithms</strong> and simulated various <strong>traffic scenarios</strong> to test car behavior under different conditions.</p> 
                    <p>a key aspect of the project was implementing a <strong>neural network</strong> for <strong>autonomous driving</strong>. i visualized its operations and tracked performance improvements. additionally, i utilized <strong>parallel computing</strong> and <strong>genetic algorithms</strong> to enhance the learning process.</p> 
                    <p>currently, i am advancing this project by creating a sophisticated <strong>virtual environment</strong> from scratch using <strong>html</strong>, <strong>css</strong>, and <strong>javascript</strong>. this includes implementing <strong>dijkstra’s algorithm</strong> for efficient pathfinding and integrating <strong>real-world data</strong> to create realistic cityscapes.</p>

                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={DriveOne} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={DriveTwo} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>

                    <div className="tech-logos">
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                            <SiJavascript className="tech-logo" style={{ color: '#F7DF1E' }} />
                        </a>
                        <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                            <SiHtml5 className="tech-logo" style={{ color: '#E34F26' }} />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                            <SiCss3 className="tech-logo" style={{ color: '#1572B6' }} />
                        </a>
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
                    <p> this project utilizes <b>opencv</b> and <b>mediapipe</b> to detect the location of the hand and is coded in python. by tracking the index finger, the program calculates the <b>euclidean distance</b> between specific points on the hand in each frame. when the distance meets a predefined threshold, a command can be executed.</p> 
                    <p>the implementation involves creating a mouse controller instance and capturing real-time video streams to identify hand landmarks. gestures such as left-click, right-click, double-click, and screenshot are recognized based on specific angles and distances between the thumb and index finger.</p>
                    <p>since it was one of my first projects involving <b>ai</b> and <b>human-computer interaction (hci)</b>, the final product of the virtual mouse is functional, but not in its final stages.</p>
                    <p>in the future, i want to be able to make this interactive in 3d enviroments like unity</p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={VirtualMouse} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={Clicker} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>

                    
                    <div className="tech-logos">
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                            <SiPython className="tech-logo" style={{ color: '#3776AB' }} />
                        </a>
                        <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
                            <SiOpencv className="tech-logo" style={{ color: '#5C3EE8' }} />
                        </a>
                        <a href="https://ai.google.dev/edge/mediapipe/solutions/guide#legacy" target="_blank" rel="noopener noreferrer">
                            <img src={MediaPipe} alt="MediaPipe Logo" className="tech-logo" />
                        </a>
                    </div>
                
                </div>

                <div className="timeline-component timeline-content">
                    <h2>my personal website</h2>
                    <small> present </small>
                    <p>this website was built with <strong>react.js</strong>, <strong>html</strong>, <strong>css</strong>, and a whole lot of blood, sweat, and tears. in the future, i’m planning to lock myself in a room and force myself to make it look cooler using <strong>three.js</strong>. </p>
                    <div className="images">
                        <Slider {...settings}>
                            <div>
                                <img src={WebsiteCode} alt="ITMZ Logo" className="carousel-image" />
                            </div>
                                <img src={Mad} alt="ITMZ Logo" className="carousel-image" />
                        </Slider>
                    </div>

                    <div className="tech-logos">
                        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                            <SiVite className="tech-icon" style={{ color: '#646CFF' }} />
                        </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <SiReact className="tech-icon" style={{ color: '#61DAFB' }} />
                        </a>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                            <SiJavascript className="tech-logo" style={{ color: '#F7DF1E' }} />
                        </a>
                        <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                            <SiHtml5 className="tech-logo" style={{ color: '#E34F26' }} />
                        </a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                            <SiCss3 className="tech-logo" style={{ color: '#1572B6' }} />
                        </a>
                       
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default MyWork;
