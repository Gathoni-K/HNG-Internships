import React from 'react';
import styles from './Confidence.module.css';

const Confidence = () => {
    return (
    <div>
      <section data-testid="test-about-confidence" className={styles.confidence}>
        <h3 className={styles.heading}>Areas I am working on</h3>
        <p className={styles.info}>
            I’m continuously working on sharpening my logic and problem-solving skills; learning to think through challenges more systematically. 
            I’m also building confidence in translating ideas into efficient code and improving my consistency when tackling complex projects. 
            Each mistake teaches me something new, and every project is a step toward becoming the developer I want to be.
        </p>
      </section>
    </div>
    )
}

export default Confidence
