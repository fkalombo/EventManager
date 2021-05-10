let router = require('express').Router();
let { handle_errors } = require('../core/async-handler');
const { getData } = require('../data/getSomeData')

module.exports = router.get(
  '/allData',
  handle_errors(async (req, res) => {
    let param = req.query.param;
    let allData = getData(param);
    res.json(allData); //this is how we return js data
  })
);
