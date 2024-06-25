const db = require('../config/db');

// Create user
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await db.none('INSERT INTO users(name, email, password, adm) VALUES($1, $2, $3, 0)', [name, email, password]);
        res.status(201).send('User added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.none('DELETE FROM users WHERE id=$1', [id]);
        res.status(200).send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// List all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.any('SELECT * FROM users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Find user by email
exports.findUserByEmail = async (req, res) => {
    const { email } = req.query;
    try {
        const user = await db.any('SELECT * FROM users WHERE email = $1', email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Update user adm status
exports.updateUserAdm = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await db.one('UPDATE users SET adm = 1 - adm WHERE id = $1 RETURNING *', id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
