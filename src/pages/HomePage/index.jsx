import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css'; // Importando o CSS específico

const HomePage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  }

  return (
    <div className="home-page">
      <h1>Welcome to the Animal Shelter</h1>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
}

export default HomePage;

