import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/About Us.png";
import "../css/intro2.css";
import "../css/intro.css";
import "../css/whyresponsive.css";

export default function Aboutus() {
  return (
    <>
      {" "}
      <Container className="wrapper mt-4 mb-3 ">
        <div className="mt-3 p-3 ">
          <Row className="" md={2}>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="img-intro text-center mb-2 ">
                <Image src={img1} className="img-fluid image-lab" />
              </div>
            </Col>
            <Col
              lg={6}
              className="title-container p-0 m-0 d-flex align-items-center"
            >
              <div className="title text-center">
                <h3 className="mb-1 ">About Us</h3>

                <div>
                  <ul className="points">
                    <li>
                      Hilux Laboratories provides one of the most affordable and
                      best quality products to the customers. We understand the
                      importance of quality of standard in all our products and
                      take utmost care while manufacturing the same with
                      adequate help from the doctors, pharmacists and our
                      research and development team.
                    </li>
                    <li>
                      At the same time, our professionals are highly talented
                      and knowledgeable who make sure that the ingredients and
                      products are well certified from all the vital
                      organizations like World Health Organization, US-FDA, GMP
                      and ISO 9001 brands that make these completely reliable
                      for the clients and ultimately for the end users or the
                      common people who will be using the same.
                    </li>
                    <li>
                      All these factors make us a trusted pharmaceutical brand.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
