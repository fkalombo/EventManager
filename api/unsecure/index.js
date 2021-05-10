let express = require('express');
let unsecure = express.Router();
unsecure.use(require(`./external`));
unsecure.use(require(`./reference`));

module.exports = unsecure;
