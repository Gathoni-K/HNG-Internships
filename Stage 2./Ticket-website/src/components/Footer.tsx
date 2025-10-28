import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.topFooter}>

                <div className={styles.companyName}>
                    <img src="logo1.png" className={styles.logo} />
                    <h2 className={styles.companyTitle}>TicketFlow</h2>
                </div>

                <div className={styles.footerLinks}>
                    <a>Features</a>
                    <a>Documentation</a>
                    <a>Support</a>
                    <a>Privacy</a>
                </div>

            </div>

            <div className={styles.bottomFooter}>
                <div className={styles.copyRight}>
                    <p>@2025 TicketFlow.All Rights Reserved.</p>
                </div>

            </div>

        </div>
    )
}

export default Footer