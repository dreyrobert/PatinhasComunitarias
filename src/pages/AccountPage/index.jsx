import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import '../../styles/AccountPage.css';

const AccountPage = () => {
  const { token, user, logout } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome_completo: user.nome_completo,
    email: user.email,
  });

  const [senhaData, setSenhaData] = useState({
    nova_senha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSenhaChange = (e) => {
    setSenhaData({
      ...senhaData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nome_completo, email } = formData;

      await api.put(
        '/admin/update',
        { nome_completo, email, email_antigo: user.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert('Dados atualizados com sucesso!');
      logout();
    } catch (error) {
      console.error('Erro ao atualizar dados', error);
    }
  };

  const handleSenhaSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nova_senha } = senhaData;

      if (nova_senha) {
        await api.put(
          '/admin/updatepassword',
          { email: user.email, nova_senha },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert('Senha atualizada com sucesso!');
        logout();
      } else {
        alert('Por favor, insira a nova senha.');
      }
    } catch (error) {
      console.error('Erro ao atualizar senha', error);
    }
  };

  return (
    <div className="account-page">
      <div className="account-container">
        <h1>Minha Conta</h1>

        <form onSubmit={handleSubmit} className="account-form">
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nome_completo"
            value={formData.nome_completo}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">Salvar Alterações</button>
        </form>

        <form onSubmit={handleSenhaSubmit} className="account-form">
          <label>Nova Senha:</label>
          <input
            type="password"
            name="nova_senha"
            value={senhaData.nova_senha}
            onChange={handleSenhaChange}
            required
          />
          <button type="submit">Alterar Senha</button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
