import React, { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import MyCard from "../MyCard/MyCard";
import ProductCard from "../MyCard/ProductCard";

const Gallery = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="gallery">
      {pizzas.map((p) => {
        return <ProductCard pizza={p} key={p.id}></ProductCard>;
      })}
    </div>
  );
};

export default Gallery;
