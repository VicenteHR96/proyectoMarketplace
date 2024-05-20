import React, { useContext, useEffect } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import ProductCard from "../../components/MyCard/ProductCard";

const Publicaciones = () => {
  const { getProductUser, productUser, userProfile } = useContext(PizzaContext);

  return (
    <div>
      <div className="w-100 my-4 text-center">
        <h2>Mis publicaciones</h2>
      </div>
      <div className="gallery">
        {productUser.map((p) => {
          return <ProductCard pizza={p} key={p.id}></ProductCard>;
        })}
      </div>
    </div>
  );
};

export default Publicaciones;
