const bcrypt = require('bcrypt');
const db = require('../config/db');

// Login user
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verifica se o usuário existe no banco de dados
        const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', email);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verifica se a senha fornecida corresponde à senha no banco de dados
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Se o usuário existe e a senha está correta, retorna os dados do usuário
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
