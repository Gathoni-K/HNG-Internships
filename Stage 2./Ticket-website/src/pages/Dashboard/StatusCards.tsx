import styles from './StatusCards.module.css';

interface StatusCardsProps {
    openTickets: number;
    closedTickets: number;
}

const StatusCards: React.FC<StatusCardsProps> = ({ openTickets, closedTickets }) => {
    return (
        <div className={styles.statusCards}>

            <div className={styles.openTickets}>
                <h3>Open Tickets</h3>
                <p>{openTickets}</p>
            </div>

            <div className={styles.resolvedTickets}>
                <h3>Resolved Tickets</h3>
                <p>{closedTickets}</p>
            </div>

        </div>
    )
}

export default StatusCards