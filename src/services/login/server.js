const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote cors
const { createUser, getUsers, getUserById, updateUser, deleteUser, makeUserAdmin } = require('./crud');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use o cors como middleware global

// Rota básica para a raiz
app.get('/', (req, res) => {
  res.send('API is running');
});

app.post('/users', async (req, res) => {
  console.log('Received request to create user:', req.body);
  const { name, email, password } = req.body;
  try {
    const user = await createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/users', async (req, res) => {
  console.log('Received request to get users');
  try {
    const users = await getUsers();
    console.log('Fetched users from DB:', users); // Log para verificar os dados do DB
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ error: error.message });
  }
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await updateUser(id, name, email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const rowCount = await deleteUser(id);
    if (rowCount > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: error.message });
  }
});

app.put('/users/:id/admin', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await makeUserAdmin(id);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error making user admin:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
