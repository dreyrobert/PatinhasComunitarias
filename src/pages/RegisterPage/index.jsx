import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/LoginPage.css';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users', { name, email, password });
            setMessage('User registered successfully');
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Aguarda 2 segundos antes de redirecionar
        } catch (error) {
            setMessage('Registration failed');
            console.error(error);
        }
    };

    return (
      <div className="register-page">
        <div className="auth-container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit" className="btn-primary" >Register</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
        </div>
    );
}

export default RegisterPage;
