import * as React from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../../contexts/PizzaContext";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, Typography } from "@mui/material";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, setPizzas, setTotal, getProductDetails } =
    React.useContext(PizzaContext);

  const [pizzaX, setPizzaX] = React.useState(null);

  React.useEffect(() => {
    const fetchProductDetails = async () => {
      const productDetails = await getProductDetails(id);
      setPizzaX(productDetails);
    };

    fetchProductDetails();
  }, [id, getProductDetails]);

  const handleClick = () => {
    const index = pizzas.findIndex((p) => p.id === pizzaX.id);
    const pizzasCarrito = [...pizzas];
    if (typeof pizzasCarrito[index].cantidad != "undefined") {
      pizzasCarrito[index].cantidad++;
    } else {
      pizzasCarrito[index].cantidad = 1;
    }

    setPizzas(pizzasCarrito);
    setTotal((prev) => prev + pizzaX.precio);
  };

  if (!pizzaX) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="cont-detalle">
      <div className="section-detalle">
        <h3>{pizzaX.nombre_producto}</h3>
        <div className="card-detalle">
          <div className="img-detalle">
            <img src={`/public/${pizzaX.foto}`} alt={pizzaX.nombre_producto} />
          </div>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <div className="d-flex justify-content-between">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {pizzaX.nombre_producto}
                </Typography>
                <Typography variant="h5" component="div">
                  $ {pizzaX.precio}
                </Typography>
              </div>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Descripción del producto
              </Typography>
              <Typography variant="body2">
                {pizzaX.descripcion_corta}
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
