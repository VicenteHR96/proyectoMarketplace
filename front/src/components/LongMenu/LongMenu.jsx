import React, { useContext, useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PizzaContext } from "../../contexts/PizzaContext.jsx";
import { registroUsuario,loginGoogle, loginUsuario, onSignOut} from "../../credenciales";

// const options = ["Editar", "Borrar"];

const ITEM_HEIGHT = 48;

export default function LongMenu({ options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { userData, setUserData } = useContext(PizzaContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("Cerrar")
    setAnchorEl(null);
    onSignOut();
    setUserData({email:"", uid:"", token:"", tipoAcceso:""})
    console.log('userData actualizado:', userData);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
