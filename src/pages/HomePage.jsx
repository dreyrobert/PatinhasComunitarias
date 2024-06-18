import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  }

  return (
    <div>
      <h1>Welcome to the Animal Shelter</h1>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
}

export default HomePage;

