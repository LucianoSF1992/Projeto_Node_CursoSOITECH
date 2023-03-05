const { Router } = require('express');

const userRoutes = require('./users');
const tarefasRoutes = require('./tarefas');
const loginRoutes = require('./login');

const route = Router();

route.use('/users', userRoutes)
  .use('/tarefas', tarefasRoutes)
  .use('/login', loginRoutes)
  
module.exports = route;
