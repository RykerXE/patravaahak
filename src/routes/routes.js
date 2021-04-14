const parentRouter = require('express').Router();

const { healthChecker } = require('../controller/healthController');
const { dbController } = require('../controller/controller');

parentRouter.get('/db', dbController);
parentRouter.get('/health', healthChecker);

module.exports = () => parentRouter;