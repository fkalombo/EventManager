let router = require('express').Router();
let { handle_errors } = require('../../core/async-handler');

module.exports = router.post(
  '/test-external',
  handle_errors(async (req, res) => {
    
    console.log("inside external test");
    
    res.json( {'result': 'successful external test'});
  })  
);  