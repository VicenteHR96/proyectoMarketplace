import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import CategoriesCard from '../../components/CategoriesCards/CategoriesCards.jsx';

const Home = () => {
  // Obtenemos la función navigate desde React Router
  const navigate = useNavigate();

  // Función para manejar el clic en una categoría y navegar a la vista de Productos
  const handleCategoryClick = (category) => {
    navigate('/productos', { state: { selectedCategory: category } });
  };

  return (
    <>
      <Banner />
      {/* Pasamos la función handleCategoryClick al componente CategoriesCard */}
      <CategoriesCard onCategoryClick={handleCategoryClick} />
      <div className="cont-gallery">
        <Gallery />
      </div>
    </>
  );
};

export default Home;