import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Fav = ({ onClick }) => {
  return (
    <>
      <IconButton aria-label="add to favorites" onClick={onClick}>
        <FavoriteIcon />
      </IconButton>
    </>
  );
};

export default Fav;
