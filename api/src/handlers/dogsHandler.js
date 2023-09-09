const {createDog, getDogsDb, getDogsApi, getAllDogs, dogsById } = require("../controllers/dogsController")

const createDogHandler = async (req, res) => {
    try {
        const {name, reference_image_id, height, weight, life_span} = req.body;
        const response = await createDog(name, reference_image_id, height, weight, life_span);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const getDogsHandler = async (req, res) => {
    try {
        const response = await getAllDogs()
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const getDetailHandler = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const dogIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await dogsById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {createDogHandler, getDogsHandler, getDetailHandler, dogIdHandler };