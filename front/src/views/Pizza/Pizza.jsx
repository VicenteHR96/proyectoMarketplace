import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../../contexts/PizzaContext";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, setPizzas, setTotal } = useContext(PizzaContext);

  const index = pizzas.findIndex((pizza) => pizza.id === id);
  const pizzaX = pizzas[index];

  const handleClick = () => {
    const index = pizzas.findIndex((p) => p.id === pizzaX.id);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad != "undefined") {
      pizzasCarrito[index].cantidad++;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }

    setPizzas(pizzasCarrito);
    setTotal((prev) => prev + pizzaX.price);
  };

  return (
    <div className="cont-detalle">
      <div className="section-detalle">
        <h3>{pizzaX.name[0].toUpperCase() + pizzaX.name.slice(1)}</h3>
        <div className="card-detalle">
          <div className="img-detalle">
            <img src={pizzaX.img} alt={pizzaX.name} />
          </div>
          {/* <div className="detalle-texto">
          <p style={{ textAlign: "justify" }}>{pizzaX.desc}</p>

          <h6>Ingredientes:</h6>
          <ul style={{ listStyle: "none" }}>
            {pizzaX.ingredients.map((i, index) => {
              return <li key={index}>🍕 {i[0].toUpperCase() + i.slice(1)}</li>;
            })}
          </ul>
          <hr />
          <h3>Precio: $ {pizzaX.price}</h3>
          <Button variant="danger" onClick={handleClick}>
            Añadir 🛒
          </Button>
        </div> */}
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="d-flex justify-content-between">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {pizzaX.name[0].toUpperCase() + pizzaX.name.slice(1)}
                </Typography>
                <Typography variant="h5" component="div">
                  $ {pizzaX.price}
                </Typography>
              </div>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Descripción del producto
              </Typography>
              <Typography variant="body2">
                {pizzaX.desc}
                <br />
                <ul style={{ listStyle: "none" }}>
                  {pizzaX.ingredients.map((i, index) => {
                    return (
                      <li key={index}>🍕 {i[0].toUpperCase() + i.slice(1)}</li>
                    );
                  })}
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleClick}>
                Añadir al carrito 🛒
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
