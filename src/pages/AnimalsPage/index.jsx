import React from 'react';
import { useNavigate } from 'react-router-dom';
import PetCard from '../../components/PetCard';

const AnimalsPage = () => {
  const navigate = useNavigate();

  return (
    <div class="mt-[120px]">
      <h1>AnimalsPage</h1>
      <PetCard />
    </div>
  );
}

export default AnimalsPage;
