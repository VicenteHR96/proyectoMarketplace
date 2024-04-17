const { existeEmail } = require('../models/tiendaModels.js');

const validaRegistro = async(req, res, next)=> {
    const { email, nombre, telefono, password, id_sexo } = req.body;

    // Verificar si algún campo no está definido o no tiene datos.
    if (!email || !nombre || !telefono || !password || !id_sexo) {
        console.log("Los datos están incompletos, no puede continuar.")
        return res.status(400).json({ message: 'Datos incompletos' });
    }

    // Valida si el email ingresado ya existe en la base de datos.
    const existe = await existeEmail(email)
    if(existe>0){
        console.log("El email ingresado ya esta registrado")
        return res.status(400).json({ message: 'El email ingresado ya esta registrado' });
    }

    console.log("Puede continuar con el registro del usuario.");
    next();
};

const validaLogin = async(req, res, next)=> {
    const { email, password } = req.body;

    // Verificar si algún campo no está definido o no tiene datos.
    if (!email || !password) {
        console.log("Los datos están incompletos, no puede continuar.")
        return res.status(400).json({ message: 'Datos incompletos' });
    }

    // Valida si el email ingresado ya existe en la base de datos.
    const existe = await existeEmail(email)
    if(existe==0){
        console.log("El email ingresado NO esta registrado")
        return res.status(400).json({ message: 'El email ingresado NO esta registrado' });
    }

    console.log("Puede continuar con el acceso al sistema.");
    next();
};

const validarProducto = async(req, res, next)=> {
    const { nombre, descripcion_corta, descripcion_completa,foto,precio,stock,id_usuario,id_categoria } = req.body;

    // Verificar si algún campo no está definido o no tiene datos.
    if (!nombre || !descripcion_corta || !descripcion_completa || !foto || !precio || !stock || !id_usuario || !id_categoria) {
        console.log("Los datos están incompletos, no puede continuar.")
        return res.status(400).json({ message: 'Datos incompletos' });
    }

    console.log("Puede continuar con el registro de producto.");
    next();
};

module.exports = {  validaRegistro, validaLogin, validarProducto };