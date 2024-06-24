import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Aqui você pode salvar o token de autenticação em localStorage ou sessionStorage
        console.log('Login bem-sucedido:', data);
        navigate('/dashboard'); // Exemplo de navegação após login bem-sucedido
      } else {
        const error = await response.json();
        console.error('Erro ao fazer login:', error);
        // Tratar erro de login, exibir mensagem de erro, etc.
      }
    } catch (error) {
      console.error('Erro inesperado:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Entrar</button>
        </form>
        <p>Não possui cadastro? <span onClick={() => navigate('/register')} className="link">Clique aqui para se registrar</span></p>
      </div>
    </div>
  );
}

export default LoginPage;
