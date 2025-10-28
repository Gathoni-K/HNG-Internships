import styles from './InProgress.module.css';
import { FaCircle } from "react-icons/fa";

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}

interface InProgressProps {
    tickets: Ticket[];
    onUpdateStatus: (id: string, newStatus: 'open' | 'in_progress' | 'closed') => void;
    onDeleteTicket: (id: string) => void;
}

const InProgress: React.FC<InProgressProps> = ({ tickets, onUpdateStatus, onDeleteTicket }) => {
    return (
        <div className={styles.inProgress}>

            <div className={styles.header}>
                <h4>In Progress Tickets</h4>
                <FaCircle className={styles.inProgressCircle}/>
            </div>

            
            {tickets.map(ticket => (
                <div key={ticket.id}>
                    <h5>{ticket.title}</h5>
                    {ticket.description && <p>{ticket.description}</p>}
                    <button onClick={() => onUpdateStatus(ticket.id, 'closed')}>
                        Mark Complete
                    </button>
                    <button onClick={() => onDeleteTicket(ticket.id)}>
                        Delete
                    </button>
                </div>
            ))}

        </div>
    )
}

export default InProgress