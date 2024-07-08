import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PetCard from '../../components/PetCard';
import PetPopup from '../../components/PetPopup';
import api from '../../services/api';

const AnimalsPage = () => {
  const [popupAnimalId, setPopupAnimalId] = useState(null);
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setPopupAnimalId(id);
  };

  const handleClosePopup = () => {
    setPopupAnimalId(null);
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await api.get('/animals');
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

  const popupAnimal = animals.find(animal => animal.id === popupAnimalId);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
        <Carousel
          responsive={responsive}
          infinite={false}
          draggable={true}
          swipeable={true}
          arrows={true}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          className="flex m-20 flex-row align-middle justify-center h-[80vh]"
        >
          {animals.map(animal => (
            <PetCard
              key={animal.id}
              animal={animal}
              onCardClick={() => handleCardClick(animal.id)}
            />
          ))}
        </Carousel>
        {popupAnimal && <PetPopup animal={popupAnimal} onClosePopup={handleClosePopup} />}
    </>
  );
};

export default AnimalsPage;
