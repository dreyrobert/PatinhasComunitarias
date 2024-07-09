const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/', adminController.getAllAdmins);
router.put('/update', adminController.updateAdmin);
router.get('/:email', adminController.getAdminByEmail);
router.put('/updatepassword', adminController.updateAdminPassword);
router.delete('/:email', adminController.deleteAdmin);

module.exports = router;
