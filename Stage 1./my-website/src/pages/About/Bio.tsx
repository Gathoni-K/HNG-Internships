//child component holding the bio.

import React from 'react';
import styles from './Bio.module.css';

const Bio = () => {
    return (
    <div>
        <section className={styles.bio}>

            <img src="profile.jpeg" className={styles.image} />
            <div className={styles.text}>
            <h4 className={styles.greeting}> Heyy there! </h4>
            <p data-testid="test-about-bio" className={styles.info}>
                I’m G Karume — a second year student currently pursuing  Mathematics and Computer Science student with a deep passion for technology, problem-solving, and creative innovation. 
                I love building things that blend logic and imagination — from web applications that tell stories to ideas that challenge how we think about tech. 
                My interests span software development, aviation, and the endless possibilities of human curiosity.
            </p>
            </div>
        </section>
    </div>
    )
}

export default Bio
