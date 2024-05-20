// Gallery.js
import React, { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import ProductCard from "../MyCard/ProductCard";
import { Pagination } from "@mui/material";

const Gallery = () => {
  const { pizzas, currentPage, setCurrentPage, totalPages } =
    useContext(PizzaContext);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div className="gallery">
      {pizzas.map((p) => (
        <ProductCard pizza={p} key={p.id} />
      ))}
      <div className="w-100 d-flex justify-content-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default Gallery;
