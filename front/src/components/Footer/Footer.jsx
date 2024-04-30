import React, { useState } from "react";
import "./Footer.css";

function Footer({ onCategoryClick }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (category) => {
    onCategoryClick(category.name);
  };

  const handleHover = (category) => {
    setHoveredCategory(category.id);
  };

  const handleHoverLeave = () => {
    setHoveredCategory(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-newsletter">
          <h1 className="footer-newsletter__header h1-footer">
            ¿Quieres recibir nuestras últimas ofertas y novedades?
          </h1>
          <div className="footer-newsletter__form">
            <input type="email" name="email" placeholder="ejemplo@correo.com" />
            <button type="submit" className="submit-btn">
              Suscribirse
            </button>
          </div>
        </div>
        <div className="footer-body">
          <div className="footer-body__content">
            <p>
              Somos un marketplace líder en venta de productos de moda, ropa deportiva y accesorios para mascotas. Ofrecemos una amplia variedad de productos de alta calidad a precios competitivos.
            </p>
          </div>
          <nav className="footer-body__nav">
            <ul className="footer-body__nav-list">
              <li className="footer-body__nav-item">
                Categorías
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <a
                      href="#"
                      className="footer-body__nav-link"
                      onClick={() => handleCategoryClick("Ropa de moda")}
                    >
                      Ropa de moda
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="#"
                      className="footer-body__nav-link"
                      onClick={() => handleCategoryClick("Ropa deportiva")}
                    >
                      Ropa deportiva
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a
                      href="#"
                      className="footer-body__nav-link"
                      onClick={() => handleCategoryClick("Accesorios para mascotas")}
                    >
                      Accesorios para mascotas
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-body__nav-item">
                Sobre nosotros
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Nuestra empresa
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Trabaja con nosotros
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Sostenibilidad
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer-body__nav-item">
                Ayuda
                <ul className="footer-body__nav-sublist">
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Contacto
                    </a>
                  </li>
                  <li className="footer-body__nav-subitem">
                    <a href="" className="footer-body__nav-link">
                      Devoluciones y cambios
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-attribute">
          <p>&copy; TuMarketplace 2024. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
