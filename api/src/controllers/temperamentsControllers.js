const { Temperaments } = require('../db');
const axios = require('axios');

const getTemperaments = async () => {
    const temperamentsDb = await Temperaments.findAll();
    if (!temperamentsDb.length) {
        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
        let temperamentsApi = [];
        data.forEach(dog => {
            if (dog.temperament) {
                temperamentsApi.push(dog.temperament);
            }
        });
        let separatedTemperaments = temperamentsApi.flatMap((e) => e.split(', '));
        let uniqueTemperaments = [...new Set(separatedTemperaments)];
        uniqueTemperaments.forEach(async e => {
            await Temperaments.findOrCreate({where:{ name: e}});
        });
        return uniqueTemperaments;
    };
    return temperamentsDb.map(e => e.name);
};

module.exports = { getTemperaments };