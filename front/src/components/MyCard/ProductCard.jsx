import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../../contexts/PizzaContext";
import Fav from "../Fav/Fav";

const AddtoCart = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ pizza }) {
  const { pizzas, setPizzas, setTotal } = React.useContext(PizzaContext);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.stopPropagation();
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="card h-100" onClick={handleDetalle}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="cont-imgcard">
          <CardMedia
            component="img"
            height="194"
            image={pizza.img}
            alt="Paella dish"
            className="img-card"
          />
        </div>

        <div className="d-flex justify-content-between">
          <CardHeader
            title={pizza.name[0].toUpperCase() + pizza.name.slice(1)}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            className="MuiCardHeader-root css-185gdzj-MuiCardHeader-root"
          >
            {`$${pizza.price}`}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Fav></Fav>
          <AddtoCart
            onClick={handleClick}
            aria-expanded={expanded}
            aria-label="Añadir al carrito"
          >
            <AddShoppingCartRoundedIcon />
          </AddtoCart>
        </CardActions>
      </div>
    </Card>
  );
}
