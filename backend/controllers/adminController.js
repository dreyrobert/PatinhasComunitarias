const bcrypt = require('bcryptjs');
const db = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

exports.register = asyncHandler(async (req, res) => {
  try {
    const { nome_completo, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10); // Hash da senha com salt
    await db.none(
      'INSERT INTO Administrador (nome_completo, email, senha) VALUES ($1, $2, $3)',
      [nome_completo, email, hashedPassword]
    );
    res.status(201).json({ message: 'Administrador registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar administrador:', error);
    res.status(500).json({ error: 'Erro ao registrar administrador' });
  }
});

exports.getAllAdmins = asyncHandler(async (req, res) => {
  const admins = await db.any('SELECT * FROM Administrador');
  res.json(admins);
});

exports.updateAdmin = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const { nome_completo, senha, novoEmail } = req.body;
  const hashedPassword = senha ? bcrypt.hashSync(senha, 8) : null;

  await db.none('UPDATE Administrador SET nome_completo = $1, senha = COALESCE($2, senha), email = COALESCE($3, email) WHERE email = $4',
    [nome_completo, hashedPassword, novoEmail, email]);

  res.json({ message: 'Administrador atualizado com sucesso' });
});

exports.deleteAdmin = asyncHandler(async (req, res) => {
  const { email } = req.params;

  await db.none('DELETE FROM Administrador WHERE email = $1', [email]);
  res.json({ message: 'Administrador removido com sucesso' });
});

