import React, { useContext } from "react";
import { PizzaContext } from "../../contexts/PizzaContext";
import { Button } from "react-bootstrap";
import QInput from "../../components/QInput/QInput";
import RemoveCircleRounded from "@mui/icons-material/RemoveCircleRounded";
import AddCircleRounded from "@mui/icons-material/AddCircleRounded";
import { Avatar, Divider } from "@mui/material";

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
                    <Avatar
                      alt="Remy Sharp"
                      src={p.img}
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                  {/* <Divider orientation="vertical" flexItem /> */}
                  <div>{p.name[0].toUpperCase() + p.name.slice(1)}</div>
                  <div>{`${p.price} x ${p.cantidad} = `}</div>

                  <div className="section-cantidad">
                    <div className="cart">
                      <div className="Add">
                        <RemoveCircleRounded
                          onClick={() => handleResta(p.id)}
                          className="btn-add"
                        />{" "}
                        {p.cantidad}
                        <AddCircleRounded
                          onClick={() => handleSuma(p.id)}
                          className="btn-add"
                        />
                      </div>
                    </div>
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
