import React from 'react';
import styles from './Goals.module.css';

const Goals = () => {
    return (
    <div>
        <section data-testid="test-about-goals" className={styles.goals}>
            <h3 className={styles.heading}>Goals</h3>
        <p className={styles.text}>
            In the HNG internship, my goal is to grow as a developer who codes with both logic and intention. 
            I want to refine my frontend skills, learn from real-world collaboration, and turn ideas into projects that genuinely solve problems.
            This internship is a chance for me to bridge my studies in Mathematics and Computer Science with hands-on experience — to build, to learn, and to push my limits one line of code at a time.
        </p>
        </section>
    </div>
    )
}

export default Goals
