// CategoriesCard.jsx
import React, { useState } from 'react';
import { FaPaw, FaTshirt } from 'react-icons/fa';
import { FcSportsMode } from "react-icons/fc";
import './CategoriesCards.css'; // Importamos el archivo CSS

const CategoriesCard = ({ onCategoryClick }) => {
  // Estado para controlar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Array con los datos de las categorías
  const categories = [
    {
      id: 1,
      name: "Deportes",
      description: "Descubre los mejores productos para tu actividad deportiva.",
      icon: <FcSportsMode />,
    },
    {
      id: 2,
      name: "Mascotas",
      description: "Encuentra todo lo que necesitas para tus mascotas.",
      icon: <FaPaw />,
    },
    {
      id: 3,
      name: "Ropa",
      description: "Explora nuestra colección de ropa de moda.",
      icon: <FaTshirt />,
    },
  ];

  // Función para manejar el clic en una categoría
  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id === selectedCategory ? null : category.id);
  };

  // Función para manejar el clic en el botón "Ver Productos"
  const handleViewProducts = (category) => {
    onCategoryClick(category.name); // Llamamos a la función proporcionada por el componente padre
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category-card ${selectedCategory === category.id ? 'selected' : ''}`}
          onClick={() => handleCategoryClick(category)}
        >
          <div className="icon">{category.icon}</div>
          <h3>{category.name}</h3>
          {selectedCategory === category.id && (
            <div className="description">
              <p>{category.description}</p>
              <button onClick={() => handleViewProducts(category)}>Ver Productos</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;