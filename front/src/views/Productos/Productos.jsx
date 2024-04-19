import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Filtros from "../../components/Filtros/Filtros.jsx";

const Productos = () => {
  return (
    <div className="d-flex ">
      <section className="col-12 col-sm-4 col-md-4 col-xl-3 col-xxl-2 filtros px-4 mt-4 d-flex flex-column align-items-center w-25">
        <h4>Filtros</h4>
        <Filtros></Filtros>
      </section>
      <section className="col-12 col-sm-8 col-md-8 col-xl-9 col-xxl-10 row mx-0 mt-4 w-75">
        <Gallery></Gallery>
      </section>
    </div>
  );
};

export default Productos;
