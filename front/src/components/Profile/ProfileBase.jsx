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
  const { userData, getUserData } = React.useContext(PizzaContext);

  // Obtener los datos del usuario cuando el componente se monta
  useEffect(() => {
    getUserData()
      .then((userData) => {
        // Cuando los datos del usuario estén disponibles, actualiza el estado
        setMainUser({
          title: "CEO of Apple",
          dt1: 32,
          dt2: 40,
          dt3: 50,
          firstName: "Jana",
          lastName: "Doe",
          midName: "Baker",
          gender: "female",
          phone: "932-555-4247",
          email: "janedoe@gmail.com",
          pass: "password123",
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [getUserData]);

  // Esperar a que se carguen los datos del usuario antes de renderizar
  if (!mainUser) {
    return <div>Loading...</div>;
  }

  const fullName = `${mainUser.firstName} ${mainUser.lastName}`;

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
              sub={mainUser.email}
              dt1={mainUser.dt1}
              dt2={mainUser.dt2}
              dt3={mainUser.dt3}
            />
          </Grid>
          <Grid item md={9}>
            <SettingsCard
              firstName={mainUser.firstName}
              lastName={mainUser.lastName}
              midName={mainUser.midName}
              phone={mainUser.phone}
              email={mainUser.email}
              pass={mainUser.pass}
              gender={mainUser.gender}
              setText={setText}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
