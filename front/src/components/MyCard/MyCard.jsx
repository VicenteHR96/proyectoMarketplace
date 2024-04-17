import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { PizzaContext } from "../../contexts/PizzaContext";
import { useNavigate } from "react-router-dom";

const MyCard = ({ pizza }) => {
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const index = pizzas.findIndex((p) => p.id === pizza.id);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad != "undefined") {
      pizzasCarrito[index].cantidad++;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }

    setPizzas(pizzasCarrito);
    setTotal((prev) => prev + pizza.price);
  };

  const handleDetalle = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>
          {pizza.name[0].toUpperCase() + pizza.name.slice(1)}
        </Card.Title>
        <hr />
        <h6>Ingredientes:</h6>
        <ul style={{ listStyle: "none" }}>
          {pizza.ingredients.map((i, index) => {
            return <li key={index}>🍕 {i[0].toUpperCase() + i.slice(1)}</li>;
          })}
        </ul>
        <hr />
        <h3>$ {pizza.price}</h3>
        <div className="section-btn">
          <Button variant="warning" onClick={handleDetalle}>
            Ver más 👀
          </Button>
          <Button variant="danger" onClick={handleClick}>
            Añadir 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
