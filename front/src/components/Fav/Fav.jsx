import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Fav = () => {
  return (
    <>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
    </>
  );
};

export default Fav;
