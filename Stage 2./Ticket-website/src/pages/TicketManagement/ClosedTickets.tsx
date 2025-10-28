import styles from './ClosedTickets.module.css';
import { FaCircle } from "react-icons/fa";

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}

interface ClosedTicketsProps {
    tickets: Ticket[];
    onUpdateStatus: (id: string, newStatus: 'open' | 'in_progress' | 'closed') => void;
    onDeleteTicket: (id: string) => void;
}

const ClosedTickets: React.FC<ClosedTicketsProps> = ({ tickets, onUpdateStatus, onDeleteTicket }) => {
    return (
        <div className={styles.closedTickets}>
            
            <div className={styles.header}>
                <h4>Closed Tickets</h4>
                <FaCircle className={styles.closedCircle}/>
            </div>

            {/* Your existing content + ticket display logic */}
            {tickets.map(ticket => (
                <div key={ticket.id}>
                    <h5>{ticket.title}</h5>
                    {ticket.description && <p>{ticket.description}</p>}
                    <button onClick={() => onUpdateStatus(ticket.id, 'open')}>
                        Reopen
                    </button>
                    <button onClick={() => onDeleteTicket(ticket.id)}>
                        Delete
                    </button>
                </div>
            ))}

        </div>
    )
}

export default ClosedTickets