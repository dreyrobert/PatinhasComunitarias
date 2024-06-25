import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import '../../styles/AdminPage.css';

function AdminPage() {
    const [users, setUsers] = useState([]);
    const [searchEmail, setSearchEmail] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await api.get(`/users/search?email=${searchEmail}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('Error searching user by email:', error);
        }
    };

    const toggleAdmStatus = async (id) => {
      try {
          await api.put(`/users/${id}`);
          fetchUsers(); // Atualiza a lista de usuários após a alteração
      } catch (error) {
          console.error('Error updating user adm status:', error);
      }
  };

    return (
        <div className ="admin-page">
        <div className="user-list-container">
            <h2>User List</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="users">
                {searchResult.length > 0 ? (
                    <div>
                        <h3>Search Result:</h3>
                        <ul>
                            {searchResult.map(user => (
                                <li key={user.id}>
                                    <span>{user.name} - {user.email}</span>
                                    <button onClick={() => toggleAdmStatus(user.id)}>
                                        {user.adm === 1 ? 'Remove Volunteer' : 'Add Volunteer'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <h3>All Users:</h3>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>
                                    <span>{user.name} - {user.email}</span>
                                    <button onClick={() => toggleAdmStatus(user.id)}>
                                        {user.adm === 1 ? 'Remove Volunteer' : 'Add Volunteer'}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
        </div>
    );
}

export default AdminPage;
