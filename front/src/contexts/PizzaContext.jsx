import { createContext, useEffect, useState } from "react";
import { ENDPOINT } from "../config/constans";
import axios from "axios";

export const PizzaContext = createContext({});

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0);
  const [userData, setUserData] = useState(null);

  const url = "/pizzas.json";

  //Obtener datos de usuario

  const getUserData = async () => {
    try {
      const response = await axios.get(ENDPOINT.user);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;
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

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        total,
        setTotal,
        getProductDetails,
        getUserData,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
