const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animalsController');

// Animais
router.post('/register', animalsController.registerAnimal);
router.get('/', animalsController.getAllAnimals);

module.exports = router;
