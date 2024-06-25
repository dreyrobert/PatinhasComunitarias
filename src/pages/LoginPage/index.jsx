import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            setMessage('Login successful');
            // Handle successful login, e.g., store token, redirect, etc.
        } catch (error) {
            setMessage('Login failed');
            console.error(error);
        }
    };

    return (
      <div className="register-page">
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
        </div>
    );
}

export default LoginPage;
