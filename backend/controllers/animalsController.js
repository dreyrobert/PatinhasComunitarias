const { db } = require('../config/db');

// Register user
exports.registerAnimal = async (req, res) => {
    const { nome, especie, raca, idade, sexo, descricao, url_midia, situacao } = req.body;

    try {
        // Inserir novo animal no banco de dados
        const newAnimal = await db.one(
            'INSERT INTO animal (nome, especie, raca, idade, sexo, descricao, url_midia, situacao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [nome, especie, raca, idade, sexo, descricao, url_midia, situacao]
        );

        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// List all animals
exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await db.any('SELECT * FROM animais');
        res.status(200).json(animals);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
