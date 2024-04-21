import * as React from "react";
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

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  const [orderBy, setOrderBy] = React.useState("");

  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <Stack spacing={1} style={{ width: "85%" }} className="filterInput">
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Buscar...</InputLabel>
        <Input
          id="standard-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          }
        />
      </FormControl>

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

      <Autocomplete
        multiple
        id="tags-standard"
        className="categorySelect"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[4]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Categorías"
            placeholder="Categorías"
          />
        )}
      />

      <FormGroup className="categoryCheck mt-4">
        <FormLabel>Categorías</FormLabel>
        <FormControlLabel control={<Checkbox />} label="Deportes" />
        <FormControlLabel control={<Checkbox />} label="Mascotas" />
        <FormControlLabel control={<Checkbox />} label="Vestuario" />
      </FormGroup>
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Ordenar por...", year: 1994 },
  { title: "Nombre A - Z", year: 1972 },
  { title: "Nombre Z - A", year: 1974 },
  { title: "Precio Menor a Mayor", year: 2008 },
  { title: "Precio Mayor a Menor", year: 1957 },
];
