const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/register', userController.register);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);
router.get('/users/search', userController.findUserByEmail);
router.put('/users/:id', userController.updateUserAdm);


router.post('/login', authController.login);

module.exports = router;
