const {Dog} = require('../db');
const axios = require('axios');

const createDog = async (name, reference_image_id, height, weight, life_span) => {
    const newDog = await Dog.create({name, reference_image_id, height, weight, life_span});
    return newDog;
};

const getDogsDb = async () => {
    const dogsDb = await Dog.findAll();
    return dogsDb;
}

const getDogsApi = async () => {
    //const petition = (await axios.get('https://api.thedogapi.com/v1/breeds')).data;
    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
    return data;
}

const dogsById = async (id) => {
    if (isNaN(id)) {
        const dbDogId = await Dog.findByPk(id);
        return dbDogId ? [dbDogId] : [];//me aseguro qu eme devuelva siempre un array
    };
    const dogApi = await getDogsApi();
    const apiDogId = dogApi.filter((dog) => dog.id === +id);//find me devuelve un objeto y filter un array de objetos
    return apiDogId;
}

const getAllDogs = async () => {
    const dogsDb = await getDogsDb();
    const dosgApi = await getDogsApi();
    if(!dogsDb.length && !dosgApi.length) throw new Error('No se encontraron perros');
    const allDogs = [...dogsDb, ...dosgApi];
    return allDogs;
}

module.exports = { createDog, getDogsDb, getDogsApi, getAllDogs, dogsById };