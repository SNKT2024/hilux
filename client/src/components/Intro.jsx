import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/Intro1.jpg";
import "../css/color.css";
import "../css/intro.css";
import "../css/main.css";
import "../css/wrap.css";

export default function Intro() {
  return (
    <>
      <Container className="wrapper">
        <div className="mt-3 p-3">
          <Row md={2}>
            <Col lg={6} className="title-container p-0 m-0">
              <div className="title text-center">
                <h1 className="mb-1">PHARMACEUTICAL EXPORTER OF INDIA</h1>
                <h3>#SERVING HUMANITY</h3>
              </div>
            </Col>
            <Col lg={6}>
              <div className="img-intro text-center">
                <Image
                  src={img1}
                  className="img-fluid image-lab rounded"
                  fluid
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
