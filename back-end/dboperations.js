let config = require('./dbconfig');
const sql = require('mssql');
const { response } = require('express');

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

// Get by Id
async function getUsersById(id) {
    try {
        let pool = await sql.connect(config);
        let tblUsers = await pool.request()
            .input('input_parameter', sql.Int, id)
            .query("SELECT * FROM tblUser WHERE UserId = @input_parameter");
            return tblUsers.recordsets;
    }
    catch(error) {
       
    }
}


// Post
async function createUser(user) {
    
    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('Name', sql.VarChar(50), user.Name)
            .input('Surname', sql.VarChar(50), user.Surname)
            .input('Email', sql.VarChar(50), user.Email)
            .input('EmailConfirmed', sql.Bit, user.EmailConfirmed)
            .input('PasswordHash', sql.VarChar, user.PasswordHash)
            .input('UserName', sql.VarChar(50), user.UserName)
            .input('DateOfBirth', sql.Date, user.DateOfBirth)
            .input('GenderId', sql.Int, user.GenderId)
            .execute('spInsertUser'); 
        return insertUser.recordsets;
    }
    catch (err) { console.log(err); }
}

module.exports = {
    getGeneralTickets : getGeneralTickets,
    getGeneralTicketWithId : getGeneralTicketWithId,
    addGeneralTicket : addGeneralTicket,
    updateTicketById : updateTicketById,
    getUsers : getUsers,
    getUsersById : getUsersById,
    createUser : createUser
}