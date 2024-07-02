const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animalsController');

// Animais
router.post('/animals', animalsController.registerAnimal);
router.get('/animals', animalsController.getAllAnimals);

module.exports = router;
