import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/PC 2.png';
const Navbar = () => {
  const isAdmin = true; // Exemplo de verificação de usuário admin

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>

      <ul className="nav-list">
        <li className="nav-item"><Link to="/about">SOBRE NOS</Link></li>
        <li className="nav-item"><Link to="/animals">NOSSOS ANIMAIS</Link></li>
        {isAdmin && <li className="nav-item"><Link to="/add-animal">ADICIONAR ANIMAIS</Link></li>}
        <li className="nav-item"><Link to="/doacoes">DOE AGORA</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

