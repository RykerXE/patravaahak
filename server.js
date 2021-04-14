const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const routes = require('./src/routes/routes');
const noRouteHandler = require('./src/config/route');

const { PORT = 4000 } = process.env;
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use('/api', routes());

server.get('/', (_req, res) => {
  res.status(200).send('Response received from server');
});

server.all('*', noRouteHandler());

const app = server.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});

// handle uncaught exceptions and exit
process.on('uncaughtException', (error) => {
  console.error('There was an uncaught error', error);
  process.exit(1);
});

// gracefully shutdown server
process.on('SIGTERM', () => {
  app.close(() => {
    console.info('Server process terminated');
  })
});
