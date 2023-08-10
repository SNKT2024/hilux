import React from "react";
import img1 from "../assets/images/Picture1.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Introtemp() {
  return (
    <>
      <Container>
        <Row lg={6} className="d-flex">
          <Col>
            <ImageI />
          </Col>
          <Col>
            <Text />
          </Col>
        </Row>
      </Container>
    </>
  );
}

const ImageI = () => {
  return (
    <div className="image">
      <Image src={img1} fluid />
    </div>
  );
};

const Text = () => {
  return (
    <div className="text-container">
      <h1 className="mb-1">PHARMACEUTICAL EXPOTER OF INDIA</h1>
      <h3>#SERVING HUMANITY</h3>
    </div>
  );
};
