import styles from './TicketsDisplay.module.css';
import OpenTickets from './OpenTickets';
import ClosedTickets from './ClosedTickets';
import InProgress from './InProgress';

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}

interface TicketsDisplayProps {
    tickets: Ticket[];
    onUpdateStatus: (id: string, newStatus: 'open' | 'in_progress' | 'closed') => void;
    onDeleteTicket: (id: string) => void;
}

const TicketsDisplay: React.FC<TicketsDisplayProps> = ({ tickets, onUpdateStatus, onDeleteTicket }) => {

    const openTickets = tickets.filter(ticket => ticket.status === 'open');
    const inProgressTickets = tickets.filter(ticket => ticket.status === 'in_progress');
    const closedTickets = tickets.filter(ticket => ticket.status === 'closed');

    return (
        <div className={styles.ticketsDisplay}>
            
            <OpenTickets 
                tickets={openTickets} 
                onUpdateStatus={onUpdateStatus}
                onDeleteTicket={onDeleteTicket}
            />
            <InProgress 
                tickets={inProgressTickets} 
                onUpdateStatus={onUpdateStatus}
                onDeleteTicket={onDeleteTicket}
            />
            <ClosedTickets 
                tickets={closedTickets} 
                onUpdateStatus={onUpdateStatus}
                onDeleteTicket={onDeleteTicket}
            />
        </div>
    )
}

export default TicketsDisplay;