import * as React from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Filtros = ({ onCategorySelect, initialCategory }) => {
  // Estado para controlar el orden de los productos
  const [orderBy, setOrderBy] = React.useState("");
  // Estado para almacenar las categorías seleccionadas
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  // Efecto para establecer la categoría inicial
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
    }
  }, [initialCategory]);

  // Función para manejar el cambio en la selección de categorías
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  // Función para manejar el cambio en el orden de los productos
  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };

  // Efecto para pasar las categorías seleccionadas al componente padre
  React.useEffect(() => {
    onCategorySelect(selectedCategories);
  }, [selectedCategories, onCategorySelect]);

  return (
    <Stack spacing={1} style={{ width: "85%" }} className="filterInput">
      {/* Input de búsqueda */}
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Buscar...</InputLabel>
        <Input
          id="standard-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Selector de orden */}
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Ordenar por...
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={orderBy}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>Ordenar por...</em>
          </MenuItem>
          <MenuItem value={10}>Nombre A-Z</MenuItem>
          <MenuItem value={20}>Nombre Z-A</MenuItem>
          <MenuItem value={30}>Precio Menor a Mayor</MenuItem>
          <MenuItem value={30}>Precio Mayor a Menor</MenuItem>
        </Select>
      </FormControl>

      {/* Checkboxes de categorías */}
      <FormGroup className="categoryCheck mt-4">
        <FormLabel>Categorías</FormLabel>

        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("Deportes")}
              onChange={handleCategoryChange}
              value="Deportes"
            />
          }
          label="Deportes"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("Mascotas")}
              onChange={handleCategoryChange}
              value="Mascotas"
            />
          }
          label="Mascotas"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.includes("Ropa")}
              onChange={handleCategoryChange}
              value="Ropa"
            />
          }
          label="Vestuario"
        />
      </FormGroup>
    </Stack>
  );
};

export default Filtros;
