import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css'; // Estilos CSS para la página de FAQ

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes</h1>
      <Accordion title="¿Cómo puedo comprar un producto?">
        <p>Para comprar un producto, sigue estos pasos:</p>
        <ul>
            <li>1. Regístrate en la página</li>
            <li>2. Inicia sesión en tu cuenta.</li>
            <li>3. Y elige el producto que más te guste</li>
        </ul>
      </Accordion>
      <Accordion title="¿Cómo puedo vender un producto?">
        <p>Para vender un producto, sigue estos pasos:</p>
        <ul>
          <li>1. Regístrate en la página </li>
          <li>2. Inicia sesión en tu cuenta.</li>
          <li>3. Ve a la página de 'Perfil' y haz clic en 'Agregar producto'.</li>
          <li>4. Completa los detalles del producto y haz clic en 'Agregar producto' para que se suba  al portal.</li>
        </ul>
      </Accordion>
      {/* Agrega más preguntas y respuestas aquí */}
    </div>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default FAQ;
