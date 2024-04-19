import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Busqueda from "../../components/Busqueda/Busqueda";

const Productos = () => {
  return (
    <div>
      <section className="col-12 col-sm-4 col-md-4 col-xl-3 col-xxl-2">
        <h3>Filtros</h3>
        <Busqueda></Busqueda>
      </section>
      <section className="col-12 col-sm-8 col-md-8 col-xl-9 col-xxl-10 pb-5 row mx-0 pt-5 mt-4">
        <Gallery></Gallery>
      </section>
    </div>
  );
};

export default Productos;
