const { Router } = require('express');
const dogsRouter = require('./dogsRouter.js');
const temperamentsRouter = require('./temperamentsRouter.js')


const mainRouter = Router();

mainRouter.use('/dogs', dogsRouter);
mainRouter.use('/temperaments', temperamentsRouter);


module.exports = mainRouter;
