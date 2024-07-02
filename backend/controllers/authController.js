const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const asyncHandler = require('../utils/asyncHandler');

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca o administrador no banco de dados
    const admin = await db.oneOrNone('SELECT * FROM Administrador WHERE email = $1', [email]);

    // Verifica se o administrador foi encontrado
    if (!admin) {
      return res.status(401).json({ message: 'Email inválidas' });
    }

    // Compara a senha fornecida com a senha armazenada
    const isMatch = await bcrypt.compare(password, admin.senha);
    if (!isMatch) {
      return res.status(401).json({ message: 'senha inválidas' });
    }

    // Gera o token JWT
    const token = jwt.sign({ email: admin.email }, 'your_jwt_secret', { expiresIn: '1h' });

    // Retorna o token na resposta
    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno ao fazer login' });
  }
});

