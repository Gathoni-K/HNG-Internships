import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <img src="logo1.png" className={styles.logo} />
            <h2 className={styles.companyName}>TicketFlow</h2>
        </div>
    )
}

export default NavBar