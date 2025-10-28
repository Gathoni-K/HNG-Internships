import styles from './Dashboard.module.css';
import TotalTickets from './TotalTickets';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import StatusCards from './StatusCards';
import { Link } from 'react-router-dom';

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}


const Dashboard = () => {

    const tickets: Ticket[] = [];

    const totalTickets = tickets.length;
    const openTickets = tickets.filter(ticket => ticket.status === 'open').length;
    const closedTickets = tickets.filter(ticket => ticket.status === 'closed').length;

    return (
        <div>

            <Layout>

                <Navbar />
                <TotalTickets totalTickets={totalTickets}/>
                <StatusCards 
                    openTickets={openTickets}
                    closedTickets={closedTickets} 
                    />

            <div className={styles.ticketsContainer}>
                <Link to="/ticketsPage" className={styles.button}>
                    View Tickets
                </Link>
            </div>

            <div className={styles.logoutContainer}>
                <Link to="/login" className={styles.logout}>
                    Logout
                </Link>
            </div>


            </Layout>

        </div>
    )
}

export default Dashboard