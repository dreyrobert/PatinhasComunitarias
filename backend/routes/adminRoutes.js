const express = require('express');
const { registerAdmin, loginAdmin, getAllAdmins, updateAdmin, deleteAdmin } = require('../controllers/adminController');

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/', getAllAdmins);
router.put('/:email', updateAdmin);
router.delete('/:email', deleteAdmin);

module.exports = router;
