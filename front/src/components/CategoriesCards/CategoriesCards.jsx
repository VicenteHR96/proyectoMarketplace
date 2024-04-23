// CategoriesCard.jsx
import React, { useState } from "react";
import { FaPaw, FaTshirt } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import "./CategoriesCards.css";
import MyPopOver from "../MyPopOver/MyPopOver";

const CategoriesCard = ({ onCategoryClick }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Deportes",
      description:
        "Descubre los mejores productos para tu actividad deportiva.",
      icon: <FcSportsMode size={50} />,
    },
    {
      id: 2,
      name: "Mascotas",
      description: "Encuentra todo lo que necesitas para tus mascotas.",
      icon: <FaPaw size={50} />,
    },
    {
      id: 3,
      name: "Ropa",
      description: "Explora nuestra colección de ropa de moda.",
      icon: <FaTshirt size={50} />,
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

  // PopOver

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          onMouseEnter={() => handleHover(category)}
          onMouseLeave={handleHoverLeave}
        >
          <div
            className={`category-card ${
              hoveredCategory === category.id ? "hovered" : ""
            }`}
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            {category.icon}
          </div>
          <MyPopOver
            anchorEl={anchorEl}
            handlePopoverClose={handlePopoverClose}
            open={hoveredCategory === category.id ? open : false}
            description={
              hoveredCategory === category.id ? category.description : null
            }
          ></MyPopOver>
          <h6 className="category-name">{category.name}</h6>
          {/* <div
            className="description"
            style={{
              opacity: hoveredCategory === category.id ? 1 : 0,
              transform:
                hoveredCategory === category.id
                  ? "translateY(0)"
                  : "translateY(20px)",
            }}
          >
            {category.description}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
