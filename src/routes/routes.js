const parentRouter = require('express').Router();

const { healthChecker } = require('../controller/healthController');

// Router.use()
parentRouter.get('/health', healthChecker);

module.exports = () => parentRouter;