const express = require("express");
const controladorUsuario = require("../controllers/usuarioController.js");
const controladorProducto = require("../controllers/productoController.js");
const { validaRegistro,validaLogin,validarProducto } = require("../middleware/validaciones.js");

const registroActividad = require("../utils/registro_actividad.js");

const router = express.Router();

router.use(registroActividad);

router.post("/login", validaLogin, controladorUsuario.validaUsuario);

router.get("/usuarios",  controladorUsuario.retornarUsuario);
router.post("/usuarios", validaRegistro, controladorUsuario.registrarUsuario);

//PRODUCTOS
router.get("/productos/usuario",  controladorProducto.productosUsuario);
router.post("/producto", validarProducto, controladorProducto.registrarProducto);
//traer los productos por categoria
//otro comentario



module.exports =  router ;