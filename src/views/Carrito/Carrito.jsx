import React, { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import { Button } from "react-bootstrap";

const Carrito = () => {
  const { pizzas, setPizzas, total, setTotal } = useContext(PizzaContext);

  const handleSuma = (id) => {
    const index = pizzas.findIndex((p) => p.id === id);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad !== "undefined") {
      pizzasCarrito[index].cantidad++;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }

    setPizzas(pizzasCarrito);
    setTotal((prev) => prev + pizzasCarrito[index].price);
  };

  const handleResta = (id) => {
    const index = pizzas.findIndex((p) => p.id === id);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad !== "undefined") {
      pizzasCarrito[index].cantidad--;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }

    setPizzas(pizzasCarrito);
    setTotal((prev) => prev - pizzasCarrito[index].price);
  };

  return (
    <div className="cont-resumen">
      <div className="section-resumen">
        <h2>Detalle del pedido:</h2>
        {pizzas
          .filter((p) => typeof p.cantidad != "undefined" && p.cantidad > 0)
          .map((p) => {
            return (
              <div key={p.id}>
                <hr />
                <div className="tabla-resumen">
                  <div>
                    <img src={p.img} alt={p.name} style={{ width: "5rem" }} />
                  </div>
                  <div>Pizza {p.name[0].toUpperCase() + p.name.slice(1)}</div>
                  <div>${p.price}</div>

                  <div className="section-cantidad">
                    <Button variant="danger" onClick={() => handleResta(p.id)}>
                      -
                    </Button>
                    {p.cantidad}
                    <Button variant="success" onClick={() => handleSuma(p.id)}>
                      +
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        <hr />
        <div>
          <h3>Total: $ {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
