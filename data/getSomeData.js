const sql = require("mssql");
const config = {
    user: 'sa',
    password: 'mypassword',
    server: 'localhost',
    database: 'SchoolDB'
};

const getData = async (param) => {
    //queries go here
}
module.exports = {
    getData
}