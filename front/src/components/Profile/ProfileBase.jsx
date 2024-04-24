// IMPORTS

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileCard from "./ProfileCard.jsx";
import SettingsCard from "./SettingsCard.jsx";

// STYLE & THEME
const theme = createTheme();

// APP
export default function ProfileBase() {
  const [text, setText] = useState("");

  const mainUser = {
    // DEFAULT VALUES
    title: "CEO of Apple",
    dt1: 32,
    dt2: 40,
    dt3: 50,
    firstName: { text },
    lastName: "Doe",
    midName: "Baker",
    gender: "female",
    phone: "932-555-4247",
    email: "janedoe@gmail.com",
    pass: "password123",
  };

  const fullName = `${mainUser.firstName} ${mainUser.lastName}`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* BACKGROUND */}
      <Grid container direction="column" sx={{ overflowX: "hidden" }}>
        {/* COMPONENTS */}
        <Grid
          container
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            px: { xs: 0, md: 7 },
            py: { md: 7 },
          }}
        >
          {/* PROFILE CARD */}
          <Grid item md={3}>
            <ProfileCard
              name={fullName}
              sub={mainUser.email}
              dt1={mainUser.dt1}
              dt2={mainUser.dt2}
              dt3={mainUser.dt3}
            />
          </Grid>

          {/* SETTINGS CARD */}
          <Grid item md={9}>
            <SettingsCard
              expose={(v) => setText(v)}
              firstName={mainUser.firstName}
              lastName={mainUser.lastName}
              midName={mainUser.midName}
              phone={mainUser.phone}
              email={mainUser.email}
              pass={mainUser.pass}
              gender={mainUser.gender}
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
