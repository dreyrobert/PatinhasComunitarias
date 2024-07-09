import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import '../../styles/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/admin/login', { email, senha });
      console.log('Login response:', response.data);
      const userInfo = {
        nome_completo: response.data.nome_completo,
        email: response.data.email,
      };
      login(response.data.token, userInfo);
      navigate('/');
    } catch (err) {
      console.error('Login failed', err);
      alert('Falha no login, tente novamente');
    }
  };

  return (
    <div className="login-page">
      <h1>Voluntário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
