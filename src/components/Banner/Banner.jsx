import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/close-up-of-pizza-on-table-royalty-free-image-995467932-1559051477.jpg?resize=2048:*"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Obtén un 20% de descuento con nuestro cupón: MAMMAMIA!</h3>
          <p>Solo válido haste el 31 de diciembre del 2023.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cardamomo.news/__export/1645765174437/sites/debate/img/2022/02/24/pan_de_ajo.png_554688468.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Prueba nuestros deliciosos panes de ajo.</h3>
          <p>Disponibles en tienda física y reparto a domicilio.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/77c0ae95c98683757058aaa04931465d.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¡Prueba nuestras distintas variedades de Pizza!</h3>
          <p>
            Opciones para amantes de la carne, vegetarianos y muchos otros
            gustos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
