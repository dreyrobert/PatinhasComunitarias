const db = require('../config/db');
const bcrypt = require('bcrypt');
// Register user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar se o email já existe
        const existingUser = await db.oneOrNone('SELECT * FROM users WHERE email = $1', email);

        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Inserir novo usuário no banco de dados
        const newUser = await db.one(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );

        res.status(201).json(newUser);
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
