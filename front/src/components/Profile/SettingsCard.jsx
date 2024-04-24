// IMPORTS
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import { Grid, FormControl, Tabs, Tab } from "@mui/material";
import Button from "@mui/material/Button";
import CustomInput from "./CustomInput";
import UserDatos from "./UserDatos";
import Gallery from "../Gallery/Gallery";

//APP
const SettingsCard = (props) => {
  //TAB STATES
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Renderizar componentes dependiendo de la pestaña seleccionada
  const renderTabContent = () => {
    switch (value) {
      case 0:
        return (
          <UserDatos
            firstName={props.firstName}
            lastName={props.lastName}
            midName={props.midName}
            phone={props.phone}
            email={props.email}
            pass={props.pass}
            gender={props.gender}
            setText={props.setText}
          />
        );
      case 1:
        // Componentes para la pestaña "Publicaciones"
        return <div>Contenido de la pestaña Publicaciones</div>;
      case 2:
        // Componentes para la pestaña "Favoritos"
        return <Gallery></Gallery>;
      default:
        return null;
    }
  };

  //RETURN
  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      {/* TABS */}
      <br></br>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Datos" />
        <Tab label="Publicaciones" />
        <Tab label="Favoritos" />
      </Tabs>
      <Divider></Divider>

      {/* MAIN CONTENT CONTAINER */}
      <form>
        <CardContent
          sx={{
            p: 3,
            maxHeight: { md: "40vh" },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          {/* FIELDS */}
          <FormControl fullWidth>{renderTabContent()}</FormControl>
        </CardContent>
      </form>
    </Card>
  );
};

export default SettingsCard;
