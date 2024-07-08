import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState({
    nome_completo: '',
    email: '',
  });

  const login = (newToken, user) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
