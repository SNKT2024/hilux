import React, { useState } from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  Offcanvas,
  OffcanvasBody,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../css/color.css";
import "../css/main.css";

import "../css/navigation.css";
import { Element } from "react-scroll";

export default function Navigation() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" nav " sticky="top">
        <Container className="container">
          <Nav>
            <h3 className="logo">HILUX</h3>
          </Nav>
          <NavbarToggle
            aria-controls="offcanvas"
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          />
          <Navbar.Offcanvas
            id="offcanvas"
            placement="end"
            className="off-canvas  "
            show={showOffCanvas}
            onHide={closeOffCanvas}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end ms-auto navbar">
                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/"}
                  onClick={closeOffCanvas}
                >
                  Home
                </NavLink>

                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/products"}
                  onClick={closeOffCanvas}
                >
                  Products
                </NavLink>
                <NavLink
                  className="navlink"
                  as={Link}
                  to={"/aboutus"}
                  onClick={closeOffCanvas}
                >
                  About Us
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
