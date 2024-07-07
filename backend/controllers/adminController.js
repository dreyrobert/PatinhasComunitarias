const {db} = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

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
