import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';



const Navbar = () => {// Exemplo de verificação de usuário admin(voluntário)
  const location = useLocation();
  const { user, logout } = useAuth();

  return (

    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav-list">
          <li className="nav-item"><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>SOBRE NÓS</Link></li>
          <li className="nav-item"><Link to="/animals" className={location.pathname === '/animals' ? 'active' : ''}>NOSSOS ANIMAIS</Link></li>
          <li className="nav-item"><Link to="/add-animal" className={location.pathname === '/add-animal' ? 'active' : ''}>ADICIONAR ANIMAIS</Link></li>
          <li className="nav-item"><Link to="/doacoes" className={location.pathname === '/doacoes' ? 'active' : ''}>APOIE AQUI</Link></li>
          <li className="nav-item"><Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>DASHBOARD</Link></li>

          <li className="nav-item"><Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>LOGIN</Link></li>
          <li className="nav-item"><Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>VOLUNTÁRIOS</Link></li>
          <li className="nav-item"><Link to="/account" className={location.pathname === '/account' ? 'active' : ''}>CONTA</Link></li>
          <li className="nav-item"><button onClick={logout}>Logout</button></li>

      </ul>
      
    </nav>
  )
}

export default Navbar;


