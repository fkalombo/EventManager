/*** Remote Database connections */
/*const config = {
    user : 'events_admin',
    password : 'P0dC@5tEvents',
    server : 'plesk3600.is.cc',
    database : 'eventsmanagerdb',
    options : {
        trustServerCertificate : true,
        enableArithAort : true,
        instancename : 'MSSQLSERVER2017'
    }
}*/

/*** Local Database connections */
const config = {
    user : 'bbdnet2455',
    password : 'P0dC@5t852456951753',
    server : 'localhost',
    database : 'eventmanagementdb',
    options : {
        trustServerCertificate : true,
        enableArithAort : true,
        instancename : 'SQLEXPRESS'
    },
     port : 49722
}

module.exports = config;

