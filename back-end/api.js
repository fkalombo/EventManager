const dboperations = require('./dboperations');
//let Db = require('./dboperations');
//let genTicket = require('./models/GeneralTicket');
//let user = require('./models/User')

/** Importing required modules */
let express = require('express');
//let bodyParser = require('body-parser');
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

/*****************     GeneralTickets Queries Start     ************/
// GET
router.route('/general-tickets/getAll').get((request, response) => {
    
    dboperations.getGeneralTickets().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/general-tickets/getById/:id').get((request, response) => {
    
    dboperations.getGeneralTicketWithId(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/general-tickets/insert').post((request, response) => {
    
    //de-structure the returned request body's generalticket
    let genTicket = {...request.body}

    dboperations.addGeneralTicket(genTicket).then(result => {
        response.status(201).json(result);
    }) 
})

// PUT
router.route('/general-tickets/updateById').put((request, response) => {

    let genTicket = {...request.body}

    dboperations.updateTicketById(genTicket).then(result => {
        response.status(200).json(result);
    })
})

/*****************     GeneralTickets Queries End     ************/



/*****************     vipTickets Queries Start     ************/

router.route('/vip-tickets/getAll').get((request, response) => {
    
    dboperations.getVIPTickets().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/vip-tickets/getById/:id').get((request, response) => {
    
    dboperations.getVIPTicketById(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

router.route('/vip-tickets/insert').post((request, response) => {
    
    let ticket = {...request.body}

    dboperations.insertVIPTicket(ticket).then(result => {
        response.status(201).json(result);
    }) 
})
/*****************     vipTickets Queries End     ************/


/******************** User Queries Start  ***************/
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
/******************** User Queries Start  ***************/


/******************** Ticket Queries Start  ***************/
router.route('/tickets/getAll').get((request, response) => {
    
    dboperations.getTickets().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/tickets/getById/:id').get((request, response) => {
    
    dboperations.getTicketById(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/tickets/insert').post((request, response) => {
    
    let ticket = {...request.body}

    dboperations.insertTicket(ticket).then(result => {
        response.status(201).json(result);
    }) 
})
/*********************************  Queries End ***********************************/


/******************** Venues Queries Start  ***************/
router.route('/venues/getAll').get((request, response) => {
    
    dboperations.getVenues().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/venues/getById/:id').get((request, response) => {
    
    dboperations.getVenueById(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/venues/insert').post((request, response) => {
    
    let venue = {...request.body}

    dboperations.insertVenue(venue).then(result => {
        response.status(201).json(result);
    }) 
})
/*********************************  Queries End ***********************************/



/******************** Events Queries Start  ***************/
router.route('/events/getAll').get((request, response) => {
    
    dboperations.getEvents().then(result => {
        response.json(result[0]);
    }) 
})

//Get:Id
router.route('/events/getById/:id').get((request, response) => {
    
    dboperations.getEventById(request.params.id).then(result => {
        response.json(result[0]);
    }) 
})

// POST
router.route('/events/insert').post((request, response) => {
    
    let event = {...request.body}

    dboperations.insertEvent(event).then(result => {
        response.status(201).json(result);
    }) 
})
/********************************* Events Queries End ***********************************/




/** Port to listen on for incoming api requests */
let port = process.env.PORT || 8090;
app.listen(port);
console.log('JTS API is running on ' + port);




