const dboperations = require('./dboperations');
let Db = require('./dboperations');
let genTicket = require('./models/GeneralTicket');
let user = require('./models/User')

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

/*** 
 * GeneralTickets endpoints
 */
// GET
router.route('/generalTickets/getAll').get((request, response) => {
    
    dboperations.getGeneralTickets().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/generalTickets/getById/:id').get((request, response) => {
    
    dboperations.getGeneralTicketWithId(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/generalTickets/insert').post((request, response) => {
    
    //de-structure the returned request body's generalticket
    let genTicket = {...request.body}

    dboperations.addGeneralTicket(genTicket).then(result => {
        response.status(201).json(result);
    }) 
})

// PUT
router.route('/generalTickets/updateById').put((request, response) => {

    let genTicket = {...request.body}

    dboperations.updateTicketById(genTicket).then(result => {
        response.status(200).json(result);
    })
})


/***
 * Users Section
 */
// GET
router.route('/users/getAll').get((request, response) => {
    
    dboperations.getUsers().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/users/getById/:id').get((request, response) => {
    
    dboperations.getUsersById(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/users/insert').post((request, response) => {
    
    //de-structure the returned request body's generalticket
    let user = {...request.body}

    dboperations.createUser(user).then(result => {
        response.status(201).json(result);
    }) 
})




/** Port to listen on for incoming api requests */
let port = process.env.PORT || 8090;
app.listen(port);
console.log('JTS API is running on ' + port);




