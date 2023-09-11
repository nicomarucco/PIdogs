const { Router } = require('express');
const { createDogHandler, getDogsHandler, dogIdHandler, dogNameHandler} = require("../handlers/dogsHandler");
const dogsRouter = Router();

dogsRouter
    .get('/id', dogIdHandler)
    .get('/name', dogNameHandler)
    .get('/', getDogsHandler)
    .post('/', createDogHandler)
;

module.exports = dogsRouter;