export const URLBASE = "http://localhost:3000";

export const ENDPOINT = {
  login: `${URLBASE}/login`,
  user: `${URLBASE}/usuario/profile`, //Intento fallido en MyNav y ProfileBase
  productos: `${URLBASE}/productos`, //Conectado
  //nuevo
  productosCategoria: `${URLBASE}/productos/categoria`,
  producto: (id) => `${URLBASE}/productos/producto/${id}`, //conectado
  productosUsuario: `${URLBASE}/productos/usuario`,
  productoRegistro: `${URLBASE}/producto`,
  productoLike: `${URLBASE}/producto/like`,
  productoLikeDelete: `${URLBASE}/producto/like`,
  productoMensajes: (id) => `${URLBASE}/producto/mensajes/${id}`,
  productoMensaje: `${URLBASE}/producto/mensaje`,
};
