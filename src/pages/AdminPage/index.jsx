import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';
import '../../styles/AdminPage.css';

const AdminPage = () => {
    const { token } = useContext(AuthContext);
    const [administradores, setAdministradores] = useState([]);
    const [novoAdmin, setNovoAdmin] = useState({ nome_completo: '', email: '', senha: '' });

    useEffect(() => {
        const fetchAdmins = async () => {
            const response = await api.get('/admin', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAdministradores(response.data);
        };
        fetchAdmins();
    }, [token]);

    const handleChange = (e) => {
        setNovoAdmin({
            ...novoAdmin,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/admin/register', novoAdmin, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNovoAdmin({ nome_completo: '', email: '', senha: '' });
            const response = await api.get('/admin', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAdministradores(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (email) => {
        try {
            await api.delete(`/admin/${email}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setAdministradores(administradores.filter(admin => admin.email !== email));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="admin-page">
            <h1>Administração</h1>
            <form onSubmit={handleSubmit} className="admin-form">
                <input
                    type="text"
                    name="nome_completo"
                    placeholder="Nome Completo"
                    value={novoAdmin.nome_completo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={novoAdmin.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={novoAdmin.senha}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Adicionar Administrador</button>
            </form>
            <ul className="admin-list">
                {administradores.map(admin => (
                    <li key={admin.email} className="admin-item">
                        {admin.nome_completo} ({admin.email})
                        <button onClick={() => handleDelete(admin.email)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPage;
