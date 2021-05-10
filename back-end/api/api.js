const dboperations = require('./dboperations');
let Db = require('./dboperations');
let genTicket = require('./generalticket');

/** Importing required modules */
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
let router = express.Router();

/** Setting up api routing and parsing information */
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cors());
app.use('/api', router);

/*** Middleware */
router.use((request, response, next) => {
    console.log('middleware');
    next();
})

/*** setting the routes */
router.route('/generaltickets').get((request, response) => {
    
    dboperations.getGeneralTickets().then(result => {
        //console.log(result);
        response.json(result[0]);
    }) 
})


/** Port to listen on for incoming api requests */
let port = process.env.PORT || 8090;
app.listen(port);
console.log('Event Manager API is running on ' + port);




