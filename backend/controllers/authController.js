const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {db} = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

exports.registerAdmin = asyncHandler(async (req, res) => {
    const { nome_completo, email, senha } = req.body;

    const hashedPassword = await bcrypt.hash(senha, 10);

    await db.none('INSERT INTO Administrador(nome_completo, email, senha) VALUES($1, $2, $3)', [nome_completo, email, hashedPassword]);

    res.status(201).json({ message: 'Administrador registrado com sucesso!' });
});

exports.loginAdmin = asyncHandler(async (req, res) => {
    const { email, senha } = req.body;

    const admin = await db.oneOrNone('SELECT * FROM Administrador WHERE email = $1', [email]);

    if (admin && (await bcrypt.compare(senha, admin.senha))) {
        const token = jwt.sign({ email: admin.email }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, nome_completo: admin.nome_completo, email: admin.email});
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});
