const { db } = require('../config/db');

// Register animals
exports.registerAnimal = async (req, res) => {
    console.log(req.body);
    const { nome, especie, raca, idade, sexo, descricao, situacao, url_midia } = req.body;

    try {
        // Inserir novo animal no banco de dados
        const newAnimal = await db.one(
            'INSERT INTO animais (nome, especie, raca, idade, sexo, descricao, situacao, url_midia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [nome, especie, raca, idade, sexo, descricao, situacao, url_midia]
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

// List all animals by adopter
exports.animalsByAdopter = async (req, res) => {
    try {
        const animals = await db.any("SELECT a.nome, a.especie, a.raca, a.idade, a.sexo, a.descricao, a.adotante_email, ad.nome_completo FROM Animais a JOIN Adotante ad ON a.adotante_email = ad.email");
        res.status(200).json(animals);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deleteAnimal = async (req, res) => {
    const { id } = req.params;

    await db.none('DELETE FROM Animais WHERE id = $1', [id]);

    res.json({ message: 'Animal removido com sucesso!' });
};

// Update animal
exports.updateAnimal = async (req, res) => {
    const { id } = req.params;
    const { nome, especie, raca, idade } = req.body;

    try {
        // Atualizar animal no banco de dados
        const updatedAnimal = await db.oneOrNone(
            'UPDATE animais SET nome = $1, especie = $2, raca = $3, idade = $4 WHERE id = $5 RETURNING *',
            [nome, especie, raca, idade, id]
        );

        if (updatedAnimal) {
            res.status(200).json(updatedAnimal);
        } else {
            res.status(404).json({ message: 'Animal não encontrado' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};
