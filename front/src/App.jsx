import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import Pizza from "./views/Pizza/Pizza";
import LogSign from "./views/LogSign/LogSign";
import Footer from "./components/Footer/Footer";
import Productos from "./views/Productos/Productos";

import useDeveloper from "./hooks/useDeveloper";
import Context from "./contexts/Context.js";
import CrearProducto from "./views/CrearProducto/CrearProducto.jsx";
import ProfileCard from "./components/Profile/ProfileCard.jsx";
import Profile from "./views/Profile/Profile.jsx";
import "react-image-crop/dist/ReactCrop.css";

function App() {
  const globalState = useDeveloper();

  return (
    <>
      <Context.Provider value={globalState}>
        <MyNav />
        <Routes>
          {/* Público */}
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/login" element={<LogSign />} />
          <Route path="/productos" element={<Productos />} />
          {/* Privado */}
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/crear-producto" element={<CrearProducto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
