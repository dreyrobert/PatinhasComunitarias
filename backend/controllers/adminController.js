const {db} = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

exports.getAllAdmins = asyncHandler(async (req, res) => {
    const admins = await db.any('SELECT nome_completo, email FROM Administrador');
    res.json(admins);
});

exports.updateAdmin = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const { nome_completo, nova_senha, novo_email } = req.body;

    if (nova_senha) {
        const hashedPassword = await bcrypt.hash(nova_senha, 10);
        await db.none('UPDATE Administrador SET senha = $1 WHERE email = $2', [hashedPassword, email]);
    }

    if (nome_completo) {
        await db.none('UPDATE Administrador SET nome_completo = $1 WHERE email = $2', [nome_completo, email]);
    }

    if (novo_email) {
        await db.none('UPDATE Administrador SET email = $1 WHERE email = $2', [novo_email, email]);
    }

    res.json({ message: 'Administrador atualizado com sucesso!' });
});

exports.deleteAdmin = asyncHandler(async (req, res) => {
    const { email } = req.params;

    await db.none('DELETE FROM Administrador WHERE email = $1', [email]);

    res.json({ message: 'Administrador removido com sucesso!' });
});
