import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';
import dog from "../../assets/doghome.png";
const HomePage = () => {
  const navigate = useNavigate();

  const gotoRoute = () => {
    navigate('/animals');
  }

  return (
    <div className="home-page">
      <div className="overlay">
        <h1>Adote um amigo hoje</h1>
        <button onClick={gotoRoute}>Vamos lá!</button>
      </div>
        <img src={dog} alt="Dog" className="dogimage" />
    </div>
  );
}

export default HomePage;

