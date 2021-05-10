const options = {
};

const logger = require('pino')(options);
const logging_middleware = require('pino-http')({
  logger
});

module.exports = { logger, logging_middleware };
