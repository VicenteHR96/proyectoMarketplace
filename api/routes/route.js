const express = require("express");
const controladorUsuario = require("../controllers/usuarioController.js");
const controladorProducto = require("../controllers/productoController.js");
const { validaRegistro,validaLogin,validarProducto, validarToken } = require("../middleware/validaciones.js");

const registroActividad = require("../utils/registro_actividad.js");

const router = express.Router();

router.use(registroActividad);

router.post("/login", validaLogin, controladorUsuario.validaUsuario); //Valida las credenciales y retorna TOKEN
router.get("/usuarios",  controladorUsuario.retornarUsuario); //Retorna la información del usuario
// router.put("/usuarios/profile", validaRegistro, controladorUsuario.modificarUsuario); //Registra un nuevo usuario
// router.post("/usuarios/registro", validaRegistro, controladorUsuario.registrarUsuario); //Registra un nuevo usuario


//PRODUCTOS uso publico
router.get("/productos",  controladorProducto.productos); // Trae todos los productos
router.get("/productos/categoria",  controladorProducto.productosCategoria); // Trae todos los productos filtrados por categoria
router.get("/productos/producto/:id",  controladorProducto.producto); //Trae un solo producto
//PRIVADO requiere token
router.get("/productos/usuario",  controladorProducto.productosUsuario); // Trae todos los productos filtrados por usuario
router.post("/producto", validarProducto, controladorProducto.registrarProducto); //Registra un nuevo producto
router.post("/producto/like", validarToken, controladorProducto.registrarLike); //Registra un nuevo like
router.delete("/producto/like", validarToken, controladorProducto.eliminarLike); //Elimina un like

router.get("/producto/mensajes/:id", validarToken, controladorProducto.traerMensajesUsario); //Registra un nuevo like
router.post("/producto/mensaje", validarToken, controladorProducto.registrarMensaje); //Registra un nuevo like

module.exports =  router ;