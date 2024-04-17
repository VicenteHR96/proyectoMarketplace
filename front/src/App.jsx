import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Carrito from "./views/Carrito/Carrito";
import Pizza from "./views/Pizza/Pizza";
import LogSign from "./views/LogSign/LogSign";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
        <Route path="/login" element={<LogSign></LogSign>}></Route>
        {/* Privado */}
        <Route path="/carrito" element={<Carrito></Carrito>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
