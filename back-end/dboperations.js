let config = require('./dbconfig');
const PasswordHash = require('./security/PasswordHasher');
const sql = require('mssql');

/**
 * GeneralTicketQueries 
 */
//Get ALL
async function getGeneralTickets() {
    try {
        let pool = await sql.connect(config);
        let genTickets = await pool.request().query("SELECT * FROM tblGeneralTicket");
        return genTickets.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Get by Id
async function getGeneralTicketWithId(GeneralTicketId) {
    try {
        let pool = await sql.connect(config);
        let genTickets = await pool.request()
            .input('input_parameter', sql.Int, GeneralTicketId)
            .query("SELECT * FROM tblGeneralTicket WHERE GeneralTicketId = @input_parameter");
            return genTickets.recordsets;
    }
    catch(error) {
        //return response.status(404).json({ error: `Record with id ${GeneralTicketId} does not exit`})
    }
}

// Post
async function addGeneralTicket(ticket) {
    
    try {
        let pool = await sql.connect(config);
        let insertGeneralTicket = await pool.request()
            .input('Price', sql.Money, ticket.Price)
            .input('TicketsLeft', sql.Int, ticket.TicketsLeft)
            .execute('spInsertGeneralTicket'); 
        return insertGeneralTicket.recordsets;
    }
    catch (err) { console.log(err); }
}


// Put
async function updateTicketById(ticket) {

    try {
    let pool = await sql.connect(config);
    let updateGenTicket = await pool.request()
        .input('GeneralTicketId', sql.Int, ticket.GeneralTicketId)
        .input('Price', sql.Money, ticket.Price)
        .input('TicketsLeft', sql.Int, ticket.TicketsLeft)
        .query('spUpdateGeneralTicketById');
    return updateGenTicket.recordsets;
    }
    catch(err) { console.log(err) }
}

/*****************************************************  tblVIPTickets  ************************************/
//Get ALL
async function getVIPTickets() {
    try {
        let pool = await sql.connect(config);
        let vipTickets = await pool.request().query("SELECT * FROM tblVIPTicket");
        return vipTickets.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Get by Id
async function getVIPTicketById(id) {
    try {
        let pool = await sql.connect(config);
        let vipTicket = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM tblVIPTicket WHERE VIPTicketId = @input_parameter");
            return vipTicket.recordsets;
    }
    catch(error) {
       
    }
}

// Post
async function insertVIPTicket(ticket) {
    
    try {
        let pool = await sql.connect(config);
        let insertVIPTicket = await pool.request()
            .input('Price', sql.Money, ticket.Price)
            .input('NumTicketsLeft', sql.Int, ticket.NumTicketsLeft)
            .execute('spInsertVIPTicket'); 
        return insertVIPTicket.recordsets;
    }
    catch (err) { console.log(err); }
}

/***********************************     tblVIPTicket End *********************/


/*****************************************************  tblTickets Queries  ************************************/
//Get ALL
async function getTickets() {
    try {
        let pool = await sql.connect(config);
        let tickets = await pool.request().query("SELECT * FROM tblTicket");
        return tickets.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Get by Id
async function getTicketById(id) {
    try {
        let pool = await sql.connect(config);
        let ticket = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM tblTicket WHERE TicketId = @input_parameter");
            return ticket.recordsets;
    }
    catch(error) {
       
    }
}

// Post
async function insertTicket(ticket) {
    
    try {
        let pool = await sql.connect(config);
        let ticket = await pool.request()
            .input('TicketType', sql.Int, ticket.TicketType)
            .input('EventId', sql.Int, ticket.EventId)
            .input('UserId', sql.Int, ticket.EventId)
            .execute('spInsertTicket'); 
        return ticket.recordsets;
    }
    catch (err) { console.log(err); }
}

/***********************************     tblTickets End *********************/

/*****************************************************  tblVenue Queries  ************************************/
//Get ALL
async function getVenues() {
    try {
        let pool = await sql.connect(config);
        let venue = await pool.request().query("SELECT * FROM tblVenue");
        return venue.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Get by Id
async function getVenueById(id) {
    try {
        let pool = await sql.connect(config);
        let venue = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM tblVenue WHERE VenueId = @input_parameter");
            return venue.recordsets;
    }
    catch(error) {
       
    }
}

// Post
async function insertVenue(venue) {
    
    try {
        let pool = await sql.connect(config);
        let insertVenue = await pool.request()
            .input('Country', sql.VarChar(100), venue.Country)
            .input('Province', sql.VarChar(50), venue.Province)
            .input('StreetAddress', sql.VarChar(150), venue.StreetAddress)
			.input('VenueName', sql.VarChar(50), venue.VenueName)
			.input('City', sql.VarChar(150), venue.City)
			.input('ZipCode', sql.VarChar(10), venue.ZipCode)
            .execute('spInsertVenue'); 
        return insertVenue.recordsets;
    }
    catch (err) { console.log(err); }
}

/***********************************     tblVenue End *********************/


/***********************************     tblUser Queries Start *********************/
/**
 * tblUser Queries 
 */
// Get All
 async function getUsers() {
    try {
        let pool = await sql.connect(config);
        let tblUsers = await pool.request().query("SELECT * FROM tblUser");
        return tblUsers.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Post
async function registerUser(user) {
    
    try {       
        let hashed = await PasswordHash.hashPassword(user.PasswordHash);

        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('Name', sql.VarChar(50), user.Name)
            .input('Surname', sql.VarChar(50), user.Surname)
            .input('Email', sql.VarChar(50), user.Email)
            .input('EmailConfirmed', sql.Bit, user.EmailConfirmed)
            .input('PasswordHash', sql.VarChar, hashed)
            .input('UserName', sql.VarChar(50), user.UserName)
            .input('DateOfBirth', sql.Date, user.DateOfBirth)
            .execute('spRegisterUser'); 
        return insertUser.recordsets;
    }
    catch (err) { console.log(err); }
}

/***************************************   End User Queries *************************************/

/***********************************     tblEvent Queries Start *********************/
/**
 * tblUser Queries 
 */
// Get All
async function getEvents() {
    try {
        let pool = await sql.connect(config);
        let events = await pool.request().query("SELECT * FROM tblEvent");
        return events.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Get by Id
async function getEventById(id) {
    try {
        let pool = await sql.connect(config);
        let events = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM tblEvent WHERE EventId = @input_parameter");
            return events.recordsets;
    }
    catch(error) {
       
    }
}


// Post
async function insertEvent(event) {
    
    try {
        console.log(event.StartTime)
        let pool = await sql.connect(config);
        let insertEvent = await pool.request()
            .input('Description', sql.VarChar(450), event.Description)        
            .input('EventDate', sql.Date, event.EventDate)
            .input('StartTime', sql.VarChar(10), event.StartTime)
            .input('EndTime', sql.VarChar(10), event.EndTime)
            .input('EventCreatorId', sql.Int, event.EventCreatorId)
            .input('BannerId', sql.Int, event.BannerId)
            .input('EventTitle', sql.VarChar(50), event.EventTitle)
            .input('EventSubTitle', sql.VarChar(50), event.EventSubTitle)
            .input('VenueId', sql.Int, event.VenueId)
            .execute('spInsertEvent'); 
        return insertEvent.recordsets;
    }
    catch (err) { console.log(err); }
}

/***************************************   End Event Queries *************************************/

module.exports = {
    insertEvent : insertEvent,
    getEventById : getEventById,
    getVenues : getVenues,
    getVenueById : getVenueById,
    getGeneralTickets : getGeneralTickets,
    getGeneralTicketWithId : getGeneralTicketWithId,
    addGeneralTicket : addGeneralTicket,
    updateTicketById : updateTicketById,
    getUsers : getUsers,
    registerUser : registerUser,
    getVIPTickets : getVIPTickets,
    getVIPTicketById : getVIPTicketById,
    insertVIPTicket : insertVIPTicket,
    getTickets : getTickets,
    getTicketById : getTicketById,
    insertTicket : insertTicket,
    insertVenue : insertVenue,
    getEvents : getEvents
}