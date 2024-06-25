import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Utilize useNavigate para navegação

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/login', { email, password });
            // Se o login for bem-sucedido, redireciona para outra página
            navigate('/'); 
        } catch (error) {
            if (error.response.status === 404) {
                setMessage('Usuário não encontrado');
            } else if (error.response.status === 401) {
                setMessage('Senha incorreta');
            } else {
                setMessage('Login failed');
            }
            console.error('Error logging in:', error);
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
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Entrar</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p>
                Não possui conta? <Link to="/register">Registre Aqui</Link>
            </p>
        </div>
        </div>
    );
}
export default LoginPage;
