import React, { useState } from 'react';
import './CrearProducto.css';

const CrearProducto = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    images: [],
    condition: 'new',
    category: 'sports', // Cambiar el estado inicial de la categoría
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
    console.log(formData);
  };

  return (
    <div className="product-form-container">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="images">Imágenes</label>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleImageUpload}
          />
        </div>
        <div className="form-row">
          <div className="form-group product-state">
            <label htmlFor="condition">Estado del producto</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
            >
              <option value="new">Nuevo</option>
              <option value="used">Usado</option>
            </select>
          </div>
          <div className="form-group product-category">
            <label htmlFor="category">Categoría</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="sports">Deportes</option>
              <option value="pets">Mascotas</option>
              <option value="clothing">Ropa</option>
            </select>
          </div>
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CrearProducto;