class Event {
    constructor(EventId, Description, MaxNumGuests, EventDate, StartTime, EndTime, EventCreatorId, BannerId, EventTitle, EventSubTitle, VenueId) {
        this.EventId = EventId;
        this.Description = Description;
        this.StartTime = StartTime;
        this.MaxNumGuests = MaxNumGuests;
        this.EventDate = EventDate;
        this.StartTime = StartTime;
        this.EndTime = EndTime;
        this.EventCreatorId = EventCreatorId;
        this.BannerId = BannerId;
        this.EventTitle = EventTitle;
        this.EventSubTitle = EventSubTitle;
        this.VenueId = VenueId;
    }
}

module.exports = Event;