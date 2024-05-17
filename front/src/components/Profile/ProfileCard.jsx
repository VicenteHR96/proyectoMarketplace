// ProfileCard.jsx
import React, { useContext, useEffect, useState } from "react";
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
import ImageCropper from "../ImageCropper/ImageCropper";
import CrearProducto from "../../views/CrearProducto/CrearProducto";
import { PizzaContext } from "../../contexts/PizzaContext";

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
  const [crearProductoOpen, setCrearProductoOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const { getUserData, userProfile } = useContext(PizzaContext);

  useEffect(() => {
    // Llamar a getUserData solo si userProfile está vacío
    if (!userProfile.id_usuario) {
      getUserData();
    }
  }, [userProfile, getUserData]);

  useEffect(() => {
    if (userProfile) {
      setAvatarUrl(userProfile.avatar);
    }
  }, [userProfile]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

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
            <Typography style={styles.details}>Mensajes</Typography>
            <Typography style={styles.details}>Publicaciones</Typography>
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
            onClick={() => setCrearProductoOpen(true)}
          >
            Agregar producto
          </Button>
        </Grid>
      </Grid>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
          contenido={
            <ImageCropper
              updateAvatar={updateAvatar}
              closeModal={() => setModalOpen(false)}
            />
          }
        />
      )}
      {crearProductoOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setCrearProductoOpen(false)}
          contenido={<CrearProducto></CrearProducto>}
        />
      )}
    </Card>
  );
}
