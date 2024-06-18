import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAdmin = true; // Exemplo de verificação de usuário admin

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/animals">Animals</Link></li>
        {isAdmin && <li><Link to="/add-animal">Add Animal</Link></li>}
      </ul>
    </nav>
  );
}

export default Navbar;

