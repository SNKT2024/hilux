import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "../css/manufacture.css";
import "../css/main.css";
// import "../css/manuresponsive.css";

import img1 from "../assets/images/Manufacture/resize_man_card1.jpg";
import img2 from "../assets/images/Manufacture/man_card2.jpg";
import img3 from "../assets/images/Manufacture/man_card3.jpg";
import img4 from "../assets/images/Manufacture/img 4.jpg";
import img5 from "../assets/images/Manufacture/img 5.jpg";
import img6 from "../assets/images/Manufacture/man_card_6.jpg";

export default function Manufacture() {
  return (
    <>
      <Container className="man-cont mt-3">
        <Container className="">
          <h1>Manufacturers Of</h1>
        </Container>
        <Container className="  mt-5 ">
          <Row className="main-row-man">
            <Col lg={4} className="mb-3">
              <Imagecard img={img1} text="Derma" />
            </Col>
            <Col lg={4} className="mb-3">
              <Imagecard img={img2} text="General" />
            </Col>
            <Col lg={4} className="mb-3">
              <Imagecard img={img3} text="Ayurvedic" />
            </Col>
            <Col lg={4} className="mb-3">
              <Imagecard img={img4} text="Pediatric" />
            </Col>
            <Col lg={4} className="mb-3">
              <Imagecard img={img5} text="Orthopedic" />
            </Col>
            <Col lg={4} className="mb-3">
              <Imagecard img={img6} text="Cosmetic" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

const Imagecard = (props) => {
  return (
    <Card className="card-man">
      <div className="img-container">
        <Card.Img variant="" src={props.img} className="img-man" />
      </div>
      <div className="text-container">
        <h5>{props.text}</h5>
      </div>
    </Card>
  );
};
