import React, { useState, useEffect } from 'react';
import "../../styles/AdminPage.css";

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Fetching users from API...');
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched users:', data); // Log para verificar os dados
        setUsers(data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const makeAdmin = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${id}/admin`, { method: 'PUT' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(updatedUser => {
        console.log('Updated user:', updatedUser); // Log para verificar o usuário atualizado
        setUsers(users.map(user => (user.id === id ? updatedUser : user)));
      })
      .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div className="admin-page">
      <h2>User Administration</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.adm ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => makeAdmin(user.id)}>Make Admin</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
