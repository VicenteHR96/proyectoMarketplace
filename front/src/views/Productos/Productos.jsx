import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import Filtros from '../../components/Filtros/Filtros.jsx';

const Productos = () => {
  // Obtenemos el objeto location desde React Router
  const location = useLocation();
  // Estado para almacenar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Efecto para obtener la categoría seleccionada desde el estado de la navegación
  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  // Función para manejar la selección de categoría en el componente Filtros
  const handleCategorySelect = (categories) => {
    setSelectedCategory(categories.length === 1 ? categories[0] : null);
  };

  return (
    <div className="productos">
      <section className="filtros px-4 mt-4 d-flex flex-column align-items-center">
        <h4>Filtros</h4>
        {/* Pasamos la función handleCategorySelect y la categoría inicial al componente Filtros */}
        <Filtros
          onCategorySelect={handleCategorySelect}
          initialCategory={selectedCategory}
        />
      </section>
      <section>
        {/* Pasamos la categoría seleccionada al componente Gallery */}
        <Gallery selectedCategories={selectedCategory ? [selectedCategory] : []} />
      </section>
    </div>
  );
};

export default Productos;