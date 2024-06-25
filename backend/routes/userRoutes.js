const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);
router.get('/users/search', userController.findUserByEmail);
router.put('/users/:id', userController.updateUserAdm);

module.exports = router;
