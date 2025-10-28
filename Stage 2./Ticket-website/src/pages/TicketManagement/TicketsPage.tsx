import Layout from '../../components/Layout';
import NavBar from '../../components/Navbar';
import NewTicket from './NewTicket';
import TicketsDisplay from './TicketsDisplay';
import { useState } from 'react';

interface Ticket {
    id: string;
    title: string;
    description?: string;
    status: 'open' | 'in_progress' | 'closed';
    createdAt: Date;
}
interface NewTicketProps {
    onAddTicket: (title: string, description?: string) => void;
}

interface TicketsDisplayProps {
    tickets: Ticket[];
    onUpdateStatus: (id: string, newStatus: Ticket['status']) => void;
    onDeleteTicket: (id: string) => void;
}

const TicketsPage = () => {
    const [tickets, setTickets] = useState<Ticket[]>([]);


  // CREATE - Add new ticket (always starts as "open")
    const addTicket = (title: string, description?: string) => {
        const newTicket: Ticket = {
        id: Date.now().toString(), // Simple ID generation
        title,
        description,
        status: 'open', // ← NEW TICKETS ARE ALWAYS "OPEN"
        createdAt: new Date()
        };
        setTickets(prev => [...prev, newTicket]);
    };

      // UPDATE - Change ticket status (move between columns)
    const updateTicketStatus = (id: string, newStatus: Ticket['status']) => {
        setTickets(prev => 
        prev.map(ticket => 
            ticket.id === id ? { ...ticket, status: newStatus } : ticket
        )
        );
    };

      // DELETE - Remove ticket
    const deleteTicket = (id: string) => {
        setTickets(prev => prev.filter(ticket => ticket.id !== id));
    };


    return (
        <div>

            <Layout>
                <NavBar />
                <NewTicket onAddTicket={addTicket} />
                <TicketsDisplay tickets={tickets} onUpdateStatus={updateTicketStatus} onDeleteTicket={deleteTicket} />

            </Layout>
        </div>
    )
}

export default TicketsPage