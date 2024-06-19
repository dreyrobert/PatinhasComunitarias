import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css'; // Importando o CSS específico
import dog from "../../assets/doghome.png";
const HomePage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  }

  return (
    <div className="home-page">
      <div className="overlay">
        <h1>Adote um amigo hoje</h1>
        <button onClick={goToRegister}>Vamos lá!</button>
      </div>
        <img src={dog} alt="Dog" className="dogimage" />
    </div>
  );
}

export default HomePage;

