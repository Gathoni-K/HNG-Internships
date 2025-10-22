import styles from './Footer.module.css';

const Footer = () => {
    return (
    <div>
      <footer data-testid="test-footer" className={styles.footer}>
        <h3 className={styles.header}>Did someone just say build?!</h3>
        <p className={styles.info}>' A Swiss Army in the programming world '</p>
      </footer>
    </div>
    )
}

export default Footer
