import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import '../../styles/LoginPage.css';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post('admin/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/admin'); // Redireciona para a página de administração após login
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-page">
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
          placeholder="senha"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
