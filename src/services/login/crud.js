const db = require('../../db'); // Certifique-se de que a importação está correta

// Função para criar um novo usuário
async function createUser(name, email, password) {
  try {
    const result = await db.one(
      'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// Função para obter todos os usuários
async function getUsers() {
  try {
    const users = await db.any('SELECT * FROM users');
    return users;
  } catch (error) {
    console.error('Error getting users:', error);
    throw error;
  }
}

// Função para obter um usuário por ID
async function getUserById(id) {
  try {
    const user = await db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
    return user;
  } catch (error) {
    console.error('Error getting user by ID:', error);
    throw error;
  }
}

// Função para atualizar um usuário
async function updateUser(id, name, email, password) {
  try {
    const result = await db.one(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
      [name, email, password, id]
    );
    return result;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// Função para deletar um usuário
async function deleteUser(id) {
  try {
    const result = await db.result('DELETE FROM users WHERE id = $1', [id]);
    return result.rowCount;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// Função para tornar um usuário administrador
async function makeUserAdmin(id) {
  try {
    const result = await db.one(
      'UPDATE users SET adm = 1 WHERE id = $1 RETURNING *',
      [id]
    );
    return result;
  } catch (error) {
    console.error('Error making user admin:', error);
    throw error;
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  makeUserAdmin
};
