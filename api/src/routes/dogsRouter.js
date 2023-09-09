const { Router } = require('express');
const { createDogHandler, getDogsHandler, dogIdHandler} = require("../handlers/dogsHandler");
const dogsRouter = Router();

dogsRouter
    .get('/', getDogsHandler)
    .get('/:id', dogIdHandler)
    .post('/', createDogHandler)
;

module.exports = dogsRouter;