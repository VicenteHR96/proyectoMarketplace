import React, { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import MyCard from "../MyCard/MyCard";

const Gallery = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="gallery">
      {pizzas.map((p) => {
        return <MyCard pizza={p} key={p.id}></MyCard>;
      })}
    </div>
  );
};

export default Gallery;
