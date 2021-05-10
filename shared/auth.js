let { logger } = require('../core/logger');

let env = process.env.NODE_ENV || 'prod';

module.exports = async (req, res, next) => {

  try {
    //allow all for now. But this is where we auth
    return next();
  } catch (e) {
    logger.error(e);
    res.send({
      status: e.status || 500,
      body: {
        message: e.message
      }
    });
  }
};

