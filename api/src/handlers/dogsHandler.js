const {createDog, getAllDogs, getDogsById, getDogsByName } = require("../controllers/dogsController")

const createDogHandler = async (req, res) => {
    try {
        const {name, reference_image_id, height, weight, life_span, temperament} = req.body;
        const response = await createDog(name, reference_image_id, height, weight, life_span, temperament);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
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

const dogIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await getDogsById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

const dogNameHandler = async (req, res) => {
    try {
        const {name} = req.params;
        const response = await getDogsByName(name);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {createDogHandler, getDogsHandler, dogIdHandler, dogNameHandler };