import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { NavLink, useNavigate } from "react-router-dom";
import { Badge, ThemeProvider, createTheme } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import DoorFrontRoundedIcon from "@mui/icons-material/DoorFrontRounded";
import Context from "../../contexts/Context";

const pages = ["INICIO", "PRODUCTOS"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MyNav = () => {
  // Prueba conexión real
  const navigate = useNavigate();
  const { getDeveloper, setDeveloper } = React.useContext(Context);

  const logout = () => {
    setDeveloper();
    window.sessionStorage.removeItem("token");
    navigate("/");
  };

  /* Línea 21: Barra de prueba para Login */
  const [auth, setAuth] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  /* Línea 25: Barra de prueba para Login */
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const setActiveClass = ({ isActive }) =>
    isActive ? "activeLink" : "inactiveLink";

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  // Conexión

  const isLogin = () => {
    if (!getDeveloper) {
      return (
        <>
          <Button color="inherit" component={NavLink} to="/login">
            Acceder
          </Button>
        </>
      );
    }

    return (
      <>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={setting === "Logout" ? logout : handleCloseUserMenu}
              >
                <Typography
                  component={NavLink}
                  to={setting === "Logout" ? "/" : `/${setting.toLowerCase()}`}
                  textAlign="center"
                >
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        component={NavLink}
                        to={`/${page.toLowerCase()}`}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <NavLink
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                    to={`/${page.toLowerCase()}`}
                    className={`pe-3 ${setActiveClass}`}
                    component={NavLink}
                  >
                    {page}
                  </NavLink>
                ))}
              </Box>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                component={NavLink}
                to="/carrito"
                className="me-3"
              >
                <Badge badgeContent={17} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              {isLogin()}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};
export default MyNav;
