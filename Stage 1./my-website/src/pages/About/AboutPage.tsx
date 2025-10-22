// this component contains all the content required in the about page.
// is the parent component where page-specific components are used.

import Bio from './Bio';
import Goals from './Goals';
import Confidence from './Confidence';
import Future from './Future';
import Extra from './Extra';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';


const AboutPage = () => {
    const handleClick = () => {

    }
    return (
    <div>
        <Bio />
        <Goals />
        <Confidence />
        <Future />
        <Extra />
        <Link className={styles.button} to="/Contact" onClick={handleClick}>
        Contact Me
        </Link>
    </div>
    )
}

export default AboutPage
