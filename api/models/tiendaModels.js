const { pool } = require('../database/connection.js');

const bcrypt = require('bcryptjs');
const format = require('pg-format');

const existeEmail = async (email) => {
  const formattedQueryValida = format(`select count(*) ya_existe from usuarios where email = '%s'`, email)
  const  data  = await pool.query(formattedQueryValida)
  const {ya_existe} = data.rows[0]
  return ya_existe
};


const retornarUsuario = async (email) => {

  // console.log(email)

  const usuario ={
    text: `SELECT id_usuario, email, nombre, telefono, sexo
    FROM usuarios 
    INNER JOIN sexos ON id_sexo=fk_id_sexo
    WHERE email=$1`,
    values: [email],
  }
 
  //console.log(usuario)
  const { rows } = await pool.query(usuario)


  return rows[0]
  
};

const registraUsuario = async ({email, nombre, telefono, password, id_sexo}) => {
    
    const passwordEncriptada = bcrypt.hashSync(password);  

    const consulta ={
      text: 'INSERT INTO usuarios VALUES (DEFAULT,$1, $2, $3, $4, $5)',
      values: [email, nombre, telefono, passwordEncriptada, id_sexo],
    }
   
    //console.log(consulta)
    const { rowsCount } = await pool.query(consulta)

    return rowsCount
    
  };

  const validaUsuario = async ({email, password}) => {

    const consulta ={
      text: 'SELECT password clave_registrada FROM usuarios where email=$1',
      values: [email]
    }
    const {rows} = await pool.query(consulta)
    const  { clave_registrada }  = rows[0]
   
    const passwordValida = bcrypt.compareSync(password, clave_registrada);

    if (passwordValida){
      return "OK"
    }
    else {
      throw { code: 401, message: "Password Incorrecta" };
    }

  };

  //PRODUCTOS
  const registrarProducto = async ({nombre, descripcion_corta, descripcion_completa,foto,precio,stock,id_usuario,id_categoria}) => {

    const consulta ={
      text: 'INSERT INTO productos VALUES (DEFAULT,$1, $2, $3, $4, $5, $6, $7, $8)',
      values: [nombre, descripcion_corta, descripcion_completa,foto,precio,stock,id_usuario,id_categoria],
    }
   
    //console.log(consulta)
    const { rowsCount } = await pool.query(consulta)

    return rowsCount
    
  };

  const traeProductosUsuario = async({limits=1, page=1, order_by="pr.nombre_ASC",id_usuario})=>{
    const [campo, direccion] = order_by.split("_");
    const offset = Math.abs(((page <= 0 ? 1 : page) - 1) * limits);

    const formattedQuery =format(`select id_producto, pr.nombre nombre_producto, descripcion_corta, descripcion_completa, foto, precio, stock, us.nombre nombre_usuario, email, categoria
      from productos pr
      inner join usuarios us on id_usuario=fk_id_usuario
      inner join categorias on id_categoria = fk_id_categoria
      WHERE fk_id_usuario=%s
      order by %s %s
      LIMIT %s
      OFFSET %s`,id_usuario,campo,direccion, limits,offset)
        
    //console.log(formattedQuery)
    const { rows } = await pool.query(formattedQuery)


    return rows



  };

  
module.exports= { existeEmail, registraUsuario, validaUsuario, retornarUsuario, registrarProducto, traeProductosUsuario };