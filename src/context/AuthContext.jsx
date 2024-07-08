import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState({
    nome_completo: '',
    email: '',
  });

  const login = (newToken, user) => {
    localStorage.setItem('nome_completo', user.nome_completo);
    localStorage.setItem('email', user.email);
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('nome_completo');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
