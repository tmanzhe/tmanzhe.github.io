import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.css';

function Footer() {
    return (
        <footer> 
            <p className = "footer-text">
                &copy; 2024 tman's website 
            </p>
            
            <div className="socials">
                <a href="https://www.linkedin.com/in/trumanchan" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/tmanzhe" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:trumanzhe@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>

        </footer>
    );
}

export default Footer;