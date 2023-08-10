import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Col, Container, Row } from "react-bootstrap";
import "../css/foot.css";
import "../css/main.css";
import "../css/foot-temp.css";

import { Link } from "react-router-dom";

export default function Foottemp() {
  return (
    <>
      <Container fluid className="main-container-foot ">
        <Row>
          <Row lg={3} xs={1} md={3} className="pt-5">
            <Col className="mb-4 ">
              <Brand />
            </Col>
            <Col>
              <Links />
            </Col>
            <Col className="contact-row">
              <Contact />
            </Col>
          </Row>
          <Row lg={1} xs={1} className="pb-5 pt-5">
            <Col>
              <Credits />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

const Brand = () => {
  return (
    <>
      <Container>
        <Row lg={1} xs={1}>
          <Col>
            <Link to={"/"}>
              <h2 className="fw-bold text-dark">HILUX</h2>
            </Link>
          </Col>
          <Col className="social-links mt-2 ">
            {" "}
            {/* <a href="" className="me-3 socialicons-foot">
              <TwitterIcon fontSize="string" />
            </a> */}
            <a href="" className="me-3 socialicons-foot">
              <FacebookIcon fontSize="string" />
            </a>
            <a href="" className="me-3 socialicons-foot">
              <InstagramIcon fontSize="string" />
            </a>
            <a href="" className="me-3 socialicons-foot">
              <LinkedInIcon fontSize="string" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Links = () => {
  return (
    <Container fluid>
      <Row lg={1} xs={1} className="mt-1">
        <Col>
          <h6 className="text-dark fw-bold">Useful Links</h6>
        </Col>
        <Col>
          <ul>
            <li>
              <a href="/" className="usefulinks">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="usefulinks">
                Products
              </a>
            </li>
            <li>
              <a href="/aboutus" className="usefulinks">
                About Us
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

const Contact = () => {
  return (
    <Container className="cont-container">
      <Row lg={1} xs={1} className="">
        <Col>
          <h6 className="fw-bold text-dark">Contact Us</h6>
          <div className="addd">
            <p>
              Central avenue road, Itwari,
              <br /> Nagpur, Maharashtra
            </p>
          </div>
        </Col>
        <Col>
          <div className="con">
            <p>
              <strong className="email-foot">Phone: </strong>
              +91 9766547527
            </p>
            <p>
              <strong className="email-foot">Email: </strong>
              <span className="">kandarsushant@outlook.com</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Credits = () => {
  return (
    <Container>
      <Row lg={1} xs={1} className="">
        <Col className="center p-0 m-0">
          <p className="txt-footer p-0 m-0">
            {" "}
            &copy; Copyright{" "}
            <strong>
              <span>HILUX</span>
            </strong>
            . All Rights Reserved
          </p>
        </Col>
        <Col className="center ">
          <span className="me-1 txt-des  txt-footer">Desgined by</span>
          <a
            href="https://privatechnologies.in/"
            target="_blank"
            className="text-dark txt-footer txt-des "
          >
            PRIVA TECHNOLOGIES
          </a>
        </Col>
      </Row>
    </Container>
  );
};
