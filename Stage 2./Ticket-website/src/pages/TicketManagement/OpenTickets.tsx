import styles from './OpenTickets.module.css';
import { FaCircle } from "react-icons/fa";

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}

interface OpenTicketsProps {
    tickets: Ticket[];
    onUpdateStatus: (id: string, newStatus: 'open' | 'in_progress' | 'closed') => void;
    onDeleteTicket: (id: string) => void;
}

const OpenTickets: React.FC<OpenTicketsProps> = ({ tickets, onUpdateStatus, onDeleteTicket }) => {
    return (
        <div className={styles.openTickets}>
            
            <div className={styles.header}>
                <h4>Open Tickets ({tickets.length})</h4>
                <FaCircle className={styles.openCircle}/>
            </div>

            {/* Add tickets display with your existing styles */}
            {tickets.map(ticket => (
                <div key={ticket.id} className={styles.ticketCard}>
                    <h5>{ticket.title}</h5>
                    {ticket.description && <p>{ticket.description}</p>}
                    <button onClick={() => onUpdateStatus(ticket.id, 'in_progress')}>
                        Start Progress
                    </button>
                    <button onClick={() => onDeleteTicket(ticket.id)}>
                        Delete
                    </button>
                </div>
            ))}
            
        </div>
    )
}

export default OpenTickets