import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import '../../styles/AccountPage.css';

const AccountPage = () => {
  const { token, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome_completo: `${user.nome_completo}`,
    email: `${user.email}`,
    senha_atual: '',
    nova_senha: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { nome_completo, email, senha_atual, nova_senha } = formData;
      await api.put(
        '/admin/me',
        { nome_completo, email, senha_atual, nova_senha },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar dados', error);
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
        <label>Senha Atual:</label>
        <input
          type="password"
          name="senha_atual"
          value={formData.senha_atual}
          onChange={handleChange}
          required
        />
        <label>Nova Senha:</label>
        <input
          type="password"
          name="nova_senha"
          value={formData.nova_senha}
          onChange={handleChange}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
    </div>
  );
};

export default AccountPage;
