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
      <CardContent
        sx={{
          p: 3,
          maxHeight: { md: "40vh" },
          textAlign: { xs: "center", md: "start" },
        }}
      >
        {/* FIELDS */}
        {value === 0 && (
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
        )}
        {value === 1 && (
          <form>
            {/* Componentes para la pestaña "Publicaciones" */}
            <div>Contenido de la pestaña Publicaciones</div>
          </form>
        )}
        {value === 2 && (
          <form>
            {/* Componentes para la pestaña "Favoritos" */}
            <Gallery />
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default SettingsCard;
