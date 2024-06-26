import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const login = (user) => {
        setIsAuthenticated(true);
        setUser(user);
        localStorage.setItem('token', JSON.stringify(user.token));
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
