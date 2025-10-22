import React from 'react';
import styles from './Future.module.css';

const Future = () => {
    return (
    <div>
      <section data-testid="test-about-future-note" className={styles.future}>
        <h3 className={styles.heading}>Dearest Gathoni,</h3>
        <p className={styles.note}>
        I hope you’re still hungry for knowledge — still chasing ideas that keep you up at night and pushing yourself to grow beyond what feels comfortable. I know you remember the long hours, the quiet battles with logic, and the moments you almost gave up but didn’t.

You’ve come far, but I hope you never lose the curiosity that started it all — the one that made you fall in love with learning, with code, and with the sky. Keep creating, keep believing in the work of your hands, and keep walking forward even when it’s hard to see the end.

You owe it to who you were — the one who refused to stop trying.
        </p>

      </section>
    </div>
    )
}

export default Future
