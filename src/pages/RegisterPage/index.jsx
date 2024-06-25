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
            const response = await api.post('/register', { name, email, password });
            // Se o registro for bem-sucedido, redireciona para a página de login
            navigate('/login');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Email já cadastrado');
            } else {
                setMessage('Erro ao registrar');
            }
            console.error('Error registering:', error);
        }
    };

    return (
    <div className="register-page">
        <div className="auth-container">
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome:</label>
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
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Registrar</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
                Já possui conta? <Link to="/login">Entrar aqui</Link>
            </p>
        </div>
        </div>
    );
}
export default RegisterPage;
