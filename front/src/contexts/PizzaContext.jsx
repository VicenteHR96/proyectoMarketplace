import React, { createContext, useEffect, useState } from "react";
import { ENDPOINT } from "../config/constans";
import axios from "axios";

export const PizzaContext = createContext({});

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [userProfile, setUserProfile] = useState({
    id_usuario: "",
    email: "",
    nombre: "",
    telefono: "",
    sexo: "",
  });

  const [userData, setUserData] = useState({
    email: "",
    uid: "",
    token: "",
  });

  const url = "/pizzas.json";

  //Obtener datos de usuario

  const getUserData = async () => {
    try {
      const token = window.sessionStorage.getItem("token");
      const response = await axios.get(ENDPOINT.user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  React.useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("token") !== null;
    if (isAuthenticated) {
      getUserData();
    }
  }, []);

  //Obtener productos

  const getData = async () => {
    const { data } = await axios.get(ENDPOINT.productos);
    setPizzas([...data.datos]);
  };

  useEffect(() => {
    getData();
  }, []);

  //Obtener producto detalle

  const getProductDetails = async (id) => {
    try {
      const response = await axios.get(ENDPOINT.producto(id));
      return response.data; // Aquí asumo que tu backend devuelve los detalles del producto en el objeto de respuesta
    } catch (error) {
      console.error("Error fetching pizza details:", error);
      return null;
    }
  };

  //Get Like

  const getLike = async (id_producto, id_usuario) => {
    try {
      const response = await axios.get(ENDPOINT.productoLike, {
        id_usuario,
        id_producto,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error get like:", error);
    }
  };

  //Post Like

  const postLike = async (id_producto, id_usuario) => {
    try {
      const token = window.sessionStorage.getItem("token");
      await axios.post(
        ENDPOINT.productoLike,
        { id_usuario, id_producto },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Error post like:", error);
    }
  };

  //Delete Like

  const deleteLike = async (id_producto, id_usuario) => {
    try {
      const token = window.sessionStorage.getItem("token");
      await axios.delete(
        ENDPOINT.productoLikeDelete,
        { id_usuario, id_producto },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Error delete like:", error);
    }
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        total,
        setTotal,
        getProductDetails,
        getUserData,
        userData,
        setUserData,
        userProfile,
        setUserProfile,
        getLike,
        postLike,
        deleteLike,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
