import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import '../../styles/AccountPage.css';

const AccountPage = () => {
  const { token, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    nome_completo: `${localStorage.getItem('nome_completo')}`,
    email: `${localStorage.getItem('email')}`,
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
      const email_antigo = user.email;
      const { nome_completo, email, nova_senha, } = formData;
      console.log (formData);
      await api.put(
        '/admin/update',
        { nome_completo, email_antigo, email, nova_senha },
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
