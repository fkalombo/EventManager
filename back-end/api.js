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

/*** /api/generaltickets/getAllGeneralTickets */
router.route('/generalTickets/getAllGeneralTickets').get((request, response) => {
    
    dboperations.getGeneralTickets().then(result => {
        response.json(result[0]);
    }) 
})

/*** /api/generaltickets/ */
router.route('/generalTickets/getTicketById/:id').get((request, response) => {
    
    dboperations.getGeneralTicketWithId(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

/*** /api/generaltickets/ */
router.route('/generalTickets/insertGeneralTicket').post((request, response) => {
    
    //de-structure the returned request body's generalticket
    let genTicket = {...request.body}

    dboperations.addGeneralTicket(genTicket).then(result => {
        response.status(201).json(result);
    }) 
})

/** Port to listen on for incoming api requests */
let port = process.env.PORT || 8090;
app.listen(port);
console.log('JTS API is running on ' + port);




