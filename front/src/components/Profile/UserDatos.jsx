import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { Grid, InputAdornment } from "@mui/material";
import Button from "@mui/material/Button";
import CustomInput from "./CustomInput";

const UserDatos = (props) => {
  //TAB STATES
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // GENDER SELECT STATES
  const genderSelect = [
    {
      value: "Masculino",
      label: "Masculino",
    },
    {
      value: "Femenino",
      label: "Femenino",
    },
  ];

  // FORM STATES
  const [user, setUser] = useState({
    // DEFAULT VALUES
    firstName: props.firstName,
    lastName: props.lastName,
    midName: props.midName,
    gender: props.gender,
    phone: props.phone,
    email: props.email,
    pass: props.pass,
    showPassword: false,
  });

  const changeField = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //BUTTON STATES
  const [edit, update] = useState({
    required: true,
    disabled: true,
    isEdit: true,
  });

  // EDIT -> UPDATE
  const changeButton = (event) => {
    event.preventDefault();
    user.showPassword = false;
    edit.disabled = !edit.disabled;
    edit.isEdit = !edit.isEdit;
    update({ ...edit });
    console.log("user: ", user);
  };

  // TOGGLE PASSWORD VISIBILITY
  const handlePassword = () => {
    user.showPassword = !user.showPassword;
    setUser({ ...user });
  };
  return (
    <>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        columnSpacing={5}
        rowSpacing={3}
      >
        {/* ROW 1: FIRST NAME */}
        <Grid component="form" item xs={6}>
          <CustomInput
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={changeField}
            title="Nombre"
            dis={edit.disabled}
            req={edit.required}
          ></CustomInput>
        </Grid>

        {/* ROW 1: LAST NAME */}
        <Grid component="form" item xs={6}>
          <CustomInput
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={changeField}
            title="Apellido"
            dis={edit.disabled}
            req={edit.required}
          ></CustomInput>
        </Grid>

        {/* ROW 2: GENDER */}
        <Grid item xs={6}>
          <CustomInput
            select
            id="gender"
            name="gender"
            value={user.gender}
            onChange={changeField}
            title="Sexo"
            dis={edit.disabled}
            req={edit.required}
            //MAP THRU OPTIONS
            content={genderSelect.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          ></CustomInput>
        </Grid>

        {/* ROW 3: PHONE */}
        <Grid item xs={6}>
          <CustomInput
            id="phone"
            name="phone"
            value={user.phone}
            onChange={changeField}
            title="Teléfono"
            dis={edit.disabled}
            req={edit.required}
            //DIALING CODE
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+56</InputAdornment>
              ),
            }}
          ></CustomInput>
        </Grid>

        {/* ROW 3: EMAIL */}
        <Grid item xs={6}>
          <CustomInput
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={changeField}
            title="Email"
            dis={edit.disabled}
            req={edit.required}
          ></CustomInput>
        </Grid>

        {/* ROW 4: PASSWORD */}
        <Grid item xs={6}>
          <CustomInput
            id="pass"
            name="pass"
            value={user.pass}
            onChange={changeField}
            title="Contraseña"
            dis={edit.disabled}
            req={edit.required}
            type={user.showPassword ? "text" : "password"}
            // PASSWORD ICON
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handlePassword}
                    edge="end"
                    disabled={edit.disabled}
                  >
                    {user.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></CustomInput>
        </Grid>
      </Grid>
      {/* BUTTON */}
      <Grid
        container
        justifyContent={{ xs: "center", md: "center" }}
        item
        xs={12}
      >
        <Button
          sx={{ p: "1rem 2rem", mt: 3, height: "2.5rem" }}
          component="button"
          size="large"
          variant="contained"
          color="primary"
          onClick={changeButton}
        >
          {edit.isEdit === false ? "UPDATE" : "EDIT"}
        </Button>
      </Grid>
    </>
  );
};

export default UserDatos;
