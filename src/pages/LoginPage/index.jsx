import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Adicionar lógica de autenticação aqui
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
        <p>Não possui cadastro? <span onClick={() => navigate('/register')} className="link">Clique aqui para se registrar</span></p>
      </div>
    </div>
  );
}

export default LoginPage;

