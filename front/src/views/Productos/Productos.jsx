import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Filtros from "../../components/Filtros/Filtros.jsx";

const Productos = () => {
  return (
    <div className="productos">
      <section className="filtros px-4 mt-4 d-flex flex-column align-items-center">
        <h4>Filtros</h4>
        <Filtros></Filtros>
      </section>
      <section>
        <Gallery></Gallery>
      </section>
    </div>
  );
};

export default Productos;
