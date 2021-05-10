let express = require('express');
let auth = require('../shared/auth');

//we're importing all the routes we have listend on 'register_routes(authenticated, []
let register_routes = (router, routes) => {
  routes.forEach((route) => router.use(require(`./${route}`)));
};

let authenticated = express.Router();
authenticated.use(auth);

//list the files that contain your endpoints here (like cans.js)
register_routes(authenticated, [
  'cans',
]);

let api = express.Router();
//
api.use('/unsecure/', require('./unsecure'));
api.use(authenticated);

module.exports = api;
