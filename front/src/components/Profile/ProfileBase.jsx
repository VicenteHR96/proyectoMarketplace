import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// Asegúrate de importar los componentes necesarios correctamente
import ProfileCard from "./ProfileCard.jsx";
import SettingsCard from "./SettingsCard.jsx";
import Modal from "../Modal/Modal.jsx";
import { PizzaContext } from "../../contexts/PizzaContext.jsx";

const theme = createTheme();

export default function ProfileBase() {
  const [text, setText] = useState("");
  const [mainUser, setMainUser] = useState(null);
  const { userProfile, setUserProfile, getUserData } =
    React.useContext(PizzaContext);
  const token = window.sessionStorage.getItem("token");
  console.log("Recuperar Token:" + token);

  // Obtener los datos del usuario cuando el componente se monta
  useEffect(() => {
    // Llamar a getUserData solo si userProfile está vacío
    if (!userProfile.id_usuario || !userProfile) {
      getUserData();
    }
  }, [userProfile]);

  // Esperar a que se carguen los datos del usuario antes de renderizar
  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const fullName = `${userProfile.nombre}`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="column" sx={{ overflowX: "hidden" }}>
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            px: { xs: 0, md: 7 },
            py: { md: 7 },
          }}
        >
          <Grid item md={3}>
            <ProfileCard
              name={fullName}
              sub={userProfile.email}
              dt1="2"
              dt2="23"
              dt3="23"
            />
          </Grid>
          <Grid item md={9}>
            <SettingsCard
              firstName={userProfile.nombre}
              lastName=""
              midName=""
              phone={userProfile.telefono}
              email={userProfile.email}
              pass=""
              gender={userProfile.sexo}
              setText={setText}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
