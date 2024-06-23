import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/LoginPage.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Adicionar lógica de registro aqui
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Cadastrar</button>
        </form>
        <p>Já possui cadastro? <span onClick={() => navigate('/login')} className="link">Clique aqui para entrar</span></p>
      </div>
    </div>
  );
}

export default RegisterPage;

