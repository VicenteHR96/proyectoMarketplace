export const URLBASE = "http://localhost:3000";

export const ENDPOINT = {
  login: `${URLBASE}/login`, //Conectado
  user: `${URLBASE}/usuario/profile`, //Conectado
  productos: `${URLBASE}/productos`, //Conectado
  //nuevo
  productosCategoria: `${URLBASE}/productos/categoria`,
  producto: (id) => `${URLBASE}/productos/producto/${id}`, //Conectado
  productosUsuario: `${URLBASE}/productos/usuario`,
  productoRegistro: `${URLBASE}/producto`, //Conectado
  productoLike: `${URLBASE}/producto/like`, //Conectado
  productoLikeDelete: `${URLBASE}/producto/like`,
  productoMensajes: (id) => `${URLBASE}/producto/mensajes/${id}`,
  productoMensaje: `${URLBASE}/producto/mensaje`,
};
