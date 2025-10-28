import styles from './Navbar.module.css';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navBar}>

            <div className={styles.logo}>
                <img src="logo1.png" />
                <h2>TicketFlow</h2>
            </div>

            <div className={styles.navBarLinks}>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/ticketsPage">Tickets</Link>
            </div>

            <div>
                <CgProfile />
            </div>

        </div>
    )
}

export default Navbar