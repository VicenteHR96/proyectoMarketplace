import React, { useContext, useEffect, useState } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import MyCard from "../MyCard/MyCard";
import ProductCard from "../MyCard/ProductCard";
import axios from "axios";
import { ENDPOINT } from "../../config/constans";
import Context from "../../contexts/Context.js";



const Gallery = () => {
  const { pizzas } = useContext(PizzaContext);
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    console.log("pase por getProductos")
    const { data } = await axios.get(ENDPOINT.productos);
    setProductos([...data.datos]);
    console.log(productos)
  };

  useEffect(() => {
    console.log('listado de productos');
    getProductos();
  },[]);
  return (
    
    <div className="gallery">
      {productos.map((p) => {
        return <ProductCard pizza={p} key={p.id}></ProductCard>;
      }) }
      {/* <img src="/public/blusa_mujer.jpg"></img>
      {
        productos.map((p)=>{
          console.log(p.id)
        })
      } */}
    </div>
  );
};

export default Gallery;
