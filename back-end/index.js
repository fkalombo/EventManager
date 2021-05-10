require('dotenv').config();
let express = require('express');
let app = express();
let { logger, logging_middleware } = require('./core/logger');
let helmet = require('helmet');
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');

let port = process.env.PORT || 4400;

const FILE_SIZE_LIMIT = '50mb';

// Configure middleware
app.use(logging_middleware);
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({ limit: FILE_SIZE_LIMIT }));
app.use(bodyParser.urlencoded({ extended: true }));

// Add routing
let api = require('./api/index');
app.use('/api/', api);
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/*', express.static(path.join(__dirname, 'public')));

// 404
app.use((req, res, next) => {
  res.redirect('/');
});

app.listen(port, () => {
  logger.warn(`*Hola*... the server has started listening...`);
  logger.info(`http://localhost:${port}`);
});