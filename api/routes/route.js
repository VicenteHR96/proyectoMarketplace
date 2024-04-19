const express = require("express");
const controladorUsuario = require("../controllers/usuarioController.js");
const controladorProducto = require("../controllers/productoController.js");
const { validaRegistro,validaLogin,validarProducto } = require("../middleware/validaciones.js");

const registroActividad = require("../utils/registro_actividad.js");

const router = express.Router();

router.use(registroActividad);

router.post("/login", validaLogin, controladorUsuario.validaUsuario); //Valida las credenciales y retorna TOKEN
router.get("/usuarios",  controladorUsuario.retornarUsuario); //Retorna la información del usuario
router.post("/usuarios", validaRegistro, controladorUsuario.registrarUsuario); //Registra un nuevo usuario

//PRODUCTOS
router.get("/productos",  controladorProducto.productos); // Trae todos los productos
router.get("/productos/categoria",  controladorProducto.productosCategoria); // Trae todos los productos filtrados por categoria
router.get("/productos/usuario",  controladorProducto.productosUsuario); // Trae todos los productos filtrados por usuario
router.get("/productos/producto/:id",  controladorProducto.producto); //Trae un solo producto
router.post("/producto", validarProducto, controladorProducto.registrarProducto); //Registra un nuevo producto





module.exports =  router ;