const {Dogs, Temperaments} = require('../db');
const axios = require('axios');

const createDog = async (name, reference_image_id, height, weight, life_span, temperament) => {
    let dogCreated = await Dogs.create({
        name,
        reference_image_id: reference_image_id || "no data provided",
        height,
        weight,
        life_span,
    });
    let separatedTemperaments = temperament.split(', ');
    separatedTemperaments.forEach(async e => {
        let temperamentDb = await Temperaments.findAll({where : {name : e}});
        await dogCreated.addTemperaments(temperamentDb);
    });
    return dogCreated;
};

const getDogsDb = async () => {
    const dogsDb = await Dogs.findAll({
        include: {
            model:Temperaments,
            attributes: ["name"],
            through:{
                attributes: []
            }
    }});
    return dogsDb;
}

const getDogsApi = async () => {
    //const petition = (await axios.get('https://api.thedogapi.com/v1/breeds')).data;
    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
    return data;
}

const getDogsById = async (id) => {
    if (isNaN(id)) {
        const dbDogId = await Dogs.findByPk(id,{
            include: {
                model: Temperaments,
                attributes:[]
            }
        });
        return dbDogId ? [dbDogId] : [];//me aseguro que me devuelva siempre un array
    };
    const dogsApi = await getDogsApi();
    const apiDogId = dogsApi.filter((dog) => dog.id === +id);//find me devuelve un objeto y filter un array de objetos
    return apiDogId;
}

const getDogsByName = async (name) => {
    const allDogs = getAllDogs();
    const dogName = allDogs.filter(x => x.name.includes(name));//find me devuelve un objeto y filter un array de objetos
    if(!dogName.length) throw new Error(`No se encontraron perros con el nombre ${name}`);
    return dogName;
}

const getAllDogs = async () => {
    const dogsDb = await getDogsDb();
    const dosgApi = await getDogsApi();
    if(!dogsDb.length && !dosgApi.length) throw new Error('No se encontraron perros');
    const allDogs = [...dogsDb, ...dosgApi];
    return allDogs;
}

module.exports = { createDog, getDogsDb, getDogsApi, getAllDogs, getDogsById, getDogsByName };