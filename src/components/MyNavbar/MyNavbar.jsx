import { faCartShopping, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { PizzaContext } from "../../contexts/PizzaContext";

const MyNavbar = () => {
  const navigate = useNavigate();
  const { total } = useContext(PizzaContext);

  const verCarrito = (e) => {
    navigate("/carrito");
  };

  const setActiveClass = ({ isActive }) =>
    isActive ? "activeLink" : "inactiveLink";

  return (
    <div className="myNavbar">
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGamepad} />
            MARKET PLACE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 links"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to={"/"} className={setActiveClass}>
                Inicio
              </NavLink>
              <NavLink to={"/productos"} className={setActiveClass}>
                Productos
              </NavLink>
              {/* <NavDropdown title="Videojuegos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Playstation</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Nintendo</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Xbox</NavDropdown.Item>
              </NavDropdown> */}
              <div>
                <Form>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                      />
                    </Col>
                    <Col xs="auto">
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
              <Nav.Link onClick={(e) => verCarrito(e)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
            </Nav>
            <Form className="d-flex gap-3 justify-content-center">
              <NavLink to="/login">
                <Button variant="primary">Log In</Button>
              </NavLink>
              <Button variant="outline-primary">Sign Up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    //----
  );
};

export default MyNavbar;
