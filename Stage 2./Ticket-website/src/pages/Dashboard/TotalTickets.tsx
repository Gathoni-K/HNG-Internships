import styles from './TotalTickets.module.css';

interface TotalTicketsProps {
    totalTickets: number;
}

const TotalTickets: React.FC<TotalTicketsProps> = ({ totalTickets }) => {
    return (
        <div className={styles.totalTickets}>
            <h3>Total Tickets:</h3>
            <p>{totalTickets}</p>
        </div>
    )
}

export default TotalTickets