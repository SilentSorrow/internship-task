const asyncHandler = require('express-async-handler')
const Pet = require("../models/pet");

const create = asyncHandler(async (req, res) => {
    const bodyPet = req.body;

    const pet = new Pet({
        alias: bodyPet.alias,
        age: bodyPet.age,
        breed: bodyPet.breed,
        user: req.user.id
    });

    const result = await pet.save();

    res.status(201).json(result);
});

const getAll = asyncHandler(async (req, res) => {
    const result = await Pet.find({ user: req.user.id });
   
    res.status(200).json(result);
});

const findByAlias = asyncHandler(async (req, res) => {
    const { alias } = req.body;

    const result = await Pet.findOne({ alias: alias, user: req.user.id });

    res.status(200).json(result);
});

const deleteMany = asyncHandler(async (req, res) => {
    const { pets } = req.body;


    await Pet.deleteMany({ user: req.user.id , _id: pets });

    res.status(200).json({});
});

const update = asyncHandler(async (req, res) => {
    const bodyPet = req.body;

    await Pet.updateOne(
        { _id: bodyPet.id },
         { $set: 
            { 
                alias: bodyPet.alias, age: bodyPet.age, breed: bodyPet.breed 
            }
        });

    res.status(200).json({});
});

module.exports = {
    create,
    getAll,
    findByAlias,
    deleteMany,
    update
}

