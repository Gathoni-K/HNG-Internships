import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className={styles.heroSectionCard}> 

            <div className={styles.text}>
                <h1>
                    TicketFlow
                </h1>
            <h3>Streamline your Tasks.
                Track progress.
                Get things done.
            </h3>

            <div className={styles.buttonContainer}>
            <Link to="/login" className={styles.button}>
                Let's Get Started
            </Link>
            </div>

            </div>

            <div className={styles.wavyBackground}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6697ff" fill-opacity="1" d="M0,128L34.3,154.7C68.6,181,137,235,206,240C274.3,245,343,203,411,192C480,181,549,203,617,176C685.7,149,754,75,823,42.7C891.4,11,960,21,1029,69.3C1097.1,117,1166,203,1234,245.3C1302.9,288,1371,288,1406,288L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>

        </div>
    )
}

export default HeroSection