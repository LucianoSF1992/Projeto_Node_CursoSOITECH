const { Router } = require('express');

const loginController = require('../controllers/loginController');

const route = Router();

route.post('/', loginController.fazerLogin);

module.exports = route;
