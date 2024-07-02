import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import '../../styles/AdminPage.css';

function AdminPage() {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ nome_completo: '', email: '', senha: '' });

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/admin/admins', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAdmins(response.data);
      } catch (error) {
        console.error('Erro ao buscar administradores:', error);
        alert('Você não está autorizado a visualizar esta página');
      }
    };
    fetchAdmins();
  }, []);

  const handleDelete = async (email) => {
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/admin/${email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAdmins(admins.filter(admin => admin.email !== email));
    } catch (error) {
      console.error('Erro ao deletar administrador:', error);
      alert('Você não está autorizado a deletar este administrador');
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/admin/register', newAdmin, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAdmins([...admins, newAdmin]);
      setNewAdmin({ nome_completo: '', email: '', senha: '' });
    } catch (error) {
      console.error('Erro ao adicionar administrador:', error);
      alert('Você não está autorizado a adicionar este administrador');
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <form onSubmit={handleAddAdmin}>
        <input type="text" placeholder="Full Name" value={newAdmin.nome_completo} onChange={(e) => setNewAdmin({ ...newAdmin, nome_completo: e.target.value })} required />
        <input type="email" placeholder="Email" value={newAdmin.email} onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={newAdmin.senha} onChange={(e) => setNewAdmin({ ...newAdmin, senha: e.target.value })} required />
        <button type="submit">Add Admin</button>
      </form>
      <ul>
        {admins.map(admin => (
          <li key={admin.email}>
            {admin.nome_completo} ({admin.email}) 
            <button onClick={() => handleDelete(admin.email)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
