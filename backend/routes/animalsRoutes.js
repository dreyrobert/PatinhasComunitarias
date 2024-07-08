const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animalsController');

// Animais
router.post('/register', animalsController.registerAnimal);
router.get('/', animalsController.getAllAnimals);
router.get('/animalsByAdopter', animalsController.animalsByAdopter);
router.delete('/:id', animalsController.deleteAnimal);
router.put('/animals/:id', updateAnimal);

module.exports = router;
