import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import '../../styles/AdminPage.css';

function AdminPage() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const toggleAdmStatus = async (userId, currentStatus) => {
        try {
            const response = await api.put(`/users/${userId}`, { adm: currentStatus === 0 ? 1 : 0 });
            const updatedUser = response.data;
            setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        } catch (error) {
            console.error('Error updating user adm status:', error);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='admin-page'>
        <div className="users-container">
            <h1>Lista de Usuários</h1>
            <input
                type="text"
                placeholder="Pesquisar por E-mail"
                value={search}
                onChange={handleSearch}
                className="search-bar"
            />
            <div className="list-container">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-item">
                        <span>{user.email}</span>
                        <button
                            className={`btn-toggle-adm ${user.adm === 0 ? 'btn-add' : 'btn-remove'}`}
                            onClick={() => toggleAdmStatus(user.id, user.adm)}
                        >
                            {user.adm === 0 ? 'Adicionar Voluntário' : 'Remover Voluntário'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}


export default AdminPage;
