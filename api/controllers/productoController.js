const { registrarProducto, traeProductosUsuario } = require('../models/tiendaModels.js');
const jwt = require("jsonwebtoken");

class productoController{
    constructor(){}
    async registrarProducto (req, res) {
        try {
            const usuarios = await registrarProducto(req.body);
            res.status(200).json({"message": "El producto ha sido ingresado al sistema"})
        } catch ({ code, message }) {
            console.log(message);
            res.status(code || 500).json({message});
        }
    }

    async productosUsuario (req, res) {
        console.log(req.query)
        try {
            const productos = await traeProductosUsuario(req.query);
            const productosHATEOAS = await prepararHATEOAS(armarDatosProductos(productos), req.query.page)
            res.status(200).json(productosHATEOAS)
        } catch ({ code, message }) {
            console.log(message);
            res.status(code || 500).json({message});
        }
    }
    //agregar funcion de las categorias
    
}

const armarDatosProductos=(datos)=>{
    const results = datos.map((producto) => {
        return {
        id: producto.id_producto,            
        nombre_producto: producto.nombre,
        descripcion_corta: producto.descripcion_corta,
        descripcion_completa: producto.descripcion_completa,
        foto: producto.foto,
        precio: producto.precio,
        stock: producto.stock,
        nombre_usuario: producto.nombre_usuario,
        categoria: producto.categoria,
        href: `/productos/producto/${producto.id_producto}`,
        }
        })
    return results
}

const prepararHATEOAS = (datos, page) => {
    
    const prev = page <= 1 ? null : page-1
    const next = page <= 1 ? null : parseInt(!page ? 1 : page) + 1
    const totalStock =  datos.reduce((total, joya) => total + joya.stock, 0);
    const total = datos.length
    const HATEOAS = {
    total,
    totalStock,
    prev,
    next,
    datos
    }
    return HATEOAS
    }

module.exports = new productoController();