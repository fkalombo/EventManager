class Ticket {
    constructor(TicketId, TicketType, EventId, UserId) {
        this.TicketId = TicketId;
        this.TicketType = TicketType;
        this.EventId = EventId;
        this.UserId = UserId;
    }
}

module.exports = Ticket;