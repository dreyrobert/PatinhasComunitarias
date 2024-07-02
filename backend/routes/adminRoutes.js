const express = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const { authenticateToken } = require('../middleware/authenticateToken');

const router = express.Router();

router.post('/register', adminController.register);
router.get('/admins', authenticateToken, adminController.getAllAdmins);
router.put('/:email', authenticateToken, adminController.updateAdmin);
router.delete('/:email', authenticateToken, adminController.deleteAdmin);
router.post('/login', authController.login)

module.exports = router;

