import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/LoginPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Usuário registrado com sucesso:', data);
        setSuccess('Usuário registrado com sucesso!');
        setTimeout(() => {
          navigate('/login'); // Redirecionar para a página de login após registro bem-sucedido
        }, 2000);
      } else {
        const error = await response.json();
        console.error('Erro ao registrar usuário:', error);
        setError(error.message || 'Erro ao registrar usuário');
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
      setError('Erro inesperado ao registrar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <p>Já possui cadastro? <span onClick={() => navigate('/login')} className="link">Clique aqui para entrar</span></p>
      </div>
    </div>
  );
}

export default RegisterPage;