// ProfileCard.jsx
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const styles = {
  details: {
    padding: "1rem",
    borderTop: "1px solid #e1e1e1",
  },
  value: {
    padding: "1rem 2rem",
    borderTop: "1px solid #e1e1e1",
    color: "#899499",
  },
};

export default function ProfileCard(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(
    "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
  );

  const navigate = useNavigate();

  const updateAvatar = (imgSrc) => {
    setAvatarUrl(imgSrc);
  };

  const handleAddProduct = () => {
    navigate("/crear-producto");
  };

  return (
    <Card variant="outlined">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <label
                htmlFor="image-upload"
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall me-3 css-v52rcf-MuiButtonBase-root-MuiIconButton-root"
              >
                <IconButton
                  id="image-upload"
                  onClick={() => setModalOpen(true)}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  color="success"
                />
                <PhotoCameraIcon
                  sx={{
                    border: "5px solid white",
                    backgroundColor: "#1976d2",
                    borderRadius: "50%",
                    padding: ".2rem",
                    width: 35,
                    height: 35,
                    color: "white",
                  }}
                />
              </label>
            }
          >
            <Avatar
              sx={{ width: 100, height: 100, mb: 1.5 }}
              src={avatarUrl}
              alt="Avatar"
            />
          </Badge>
          <Typography variant="h6">{props.name}</Typography>
          <Typography color="text.secondary">{props.sub}</Typography>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Typography style={styles.details}>Datos de usuario</Typography>
            <Typography style={styles.details}>Mis publicaciones</Typography>
            <Typography style={styles.details}>Favoritos</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "end" }}>
            <Typography style={styles.value}>{props.dt1}</Typography>
            <Typography style={styles.value}>{props.dt2}</Typography>
            <Typography style={styles.value}>{props.dt3}</Typography>
          </Grid>
        </Grid>
        <Grid item style={styles.details} sx={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "99%", p: 1, my: 2 }}
            onClick={handleAddProduct}
          >
            Agregar producto
          </Button>
        </Grid>
      </Grid>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </Card>
  );
}
