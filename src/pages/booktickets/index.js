import { WrapBookTicket } from '../../conponent/index.js';
import { BookTicketProvider } from '../../contexts/bookticketcontext.js';
function BookTickets() {
    return (
        <BookTicketProvider>
            <WrapBookTicket />
        </BookTicketProvider>
    );
}

export default BookTickets;
