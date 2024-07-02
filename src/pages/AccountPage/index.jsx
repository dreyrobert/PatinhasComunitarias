import React, { useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import '../../styles/AccontPage.css';

function AccountPage() {
  const { user } = useAuth();
  const [accountDetails, setAccountDetails] = useState({ nome_completo: '', email: '', senha: '' });

  const handleUpdate = async (e) => {
    e.preventDefault();
    await api.put(`/admin/${user.email}`, accountDetails);
    alert('Account updated successfully');
  };

  return (
    <div className="account-page">
      <h1>Account Page</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="Full Name" value={accountDetails.nome_completo} onChange={(e) => setAccountDetails({ ...accountDetails, nome_completo: e.target.value })} />
        <input type="email" placeholder="Email" value={accountDetails.email} onChange={(e) => setAccountDetails({ ...accountDetails, email: e.target.value })} />
        <input type="password" placeholder="Password" value={accountDetails.senha} onChange={(e) => setAccountDetails({ ...accountDetails, senha: e.target.value })} />
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
}

export default AccountPage;
