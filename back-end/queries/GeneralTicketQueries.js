let config = require('./dbconfig');
const sql = require('mssql');
const { response } = require('express');

// Get All
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

module.exports = {
    getGeneralTickets : getGeneralTickets,
    getGeneralTicketWithId : getGeneralTicketWithId,
    addGeneralTicket : addGeneralTicket,
    updateTicketById : updateTicketById
}