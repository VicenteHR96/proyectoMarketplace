// CategoriesCard.jsx
import React, { useState } from 'react';
import { FaPaw, FaTshirt } from 'react-icons/fa';
import { FcSportsMode } from "react-icons/fc";
import './CategoriesCards.css';

const CategoriesCard = ({ onCategoryClick }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Deportes",
      description: "Descubre los mejores productos para tu actividad deportiva.",
      icon: <FcSportsMode size={100} />,
    },
    {
      id: 2,
      name: "Mascotas",
      description: "Encuentra todo lo que necesitas para tus mascotas.",
      icon: <FaPaw size={100} />,
    },
    {
      id: 3,
      name: "Ropa",
      description: "Explora nuestra colección de ropa de moda.",
      icon: <FaTshirt size={100} />,
    },
  ];

  const handleCategoryClick = (category) => {
    onCategoryClick(category.name);
  };

  const handleHover = (category) => {
    setHoveredCategory(category.id);
  };

  const handleHoverLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category-card ${hoveredCategory === category.id ? 'hovered' : ''}`}
          onClick={() => handleCategoryClick(category)}
          onMouseEnter={() => handleHover(category)}
          onMouseLeave={handleHoverLeave}
        >
          {category.icon}
          <h3>{category.name}</h3>
          <div className="description" style={{ opacity: hoveredCategory === category.id ? 1 : 0, transform: hoveredCategory === category.id ? 'translateY(0)' : 'translateY(20px)' }}>
            {category.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;