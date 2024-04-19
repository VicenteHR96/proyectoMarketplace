import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import Pizza from "./views/Pizza/Pizza";
import LogSign from "./views/LogSign/LogSign";
import Footer from "./components/Footer/Footer";
import Productos from "./views/Productos/Productos";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
        <Route path="/login" element={<LogSign></LogSign>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        {/* Privado */}
        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
