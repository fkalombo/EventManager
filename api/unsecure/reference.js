let router = require("express").Router();
let { handle_errors } = require("../../core/async-handler");

module.exports = router.get("/getReferenceTest",
  handle_errors(async (req, res) => {
    const referenceData = ['ref1', 'ref2', 'ref3']
    res.json(referenceData);
  })
);