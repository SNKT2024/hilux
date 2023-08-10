import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../css/foot.css";
export default function Foot() {
  return (
    <>
      <footer className="footer ">
        <Container fluid className="footer-container ">
          <Row className="gy-4 footer-row">
            <Col lg={5} md={12} className="footer-info ">
              <a href="" className="d-flex align-items-center logo">
                <span>HILUX</span>
              </a>
              <div className="social-links d-flex mt-4">
                <a href="" className="me-2 ">
                  <TwitterIcon fontSize="string" />
                </a>
                <a href="" className="me-2 ">
                  <FacebookIcon fontSize="string" />
                </a>
                <a href="" className="me-2">
                  <InstagramIcon fontSize="string " />
                </a>
                <a href="" className="socialicons">
                  <LinkedInIcon fontSize="string" />
                </a>
              </div>
            </Col>
            <Col lg={4} className="footer-links">
              <h4>Useful Links</h4>
              <ul>
                {" "}
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="products.html">Products</a>
                </li>
                <li>
                  <a href="about.html">About us</a>
                </li>
                <li>
                  <a href="form.html">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col
              lg={3}
              md={12}
              className="footer-contact text-center text-md-start"
            >
              <h4>Contact Us</h4>
              <p style={{ fontSize: "15px" }}>
                Central avenue road,
                <br />
                Itwari, Nagpur
                <br />
                Maharashtra <br />
                <br />
                <strong>Phone:</strong> +91 9766547527
                <br />
                <strong>Email:</strong> kandarsushant@outlook.com
                <br />
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="copyright">
            {" "}
            &copy; Copyright{" "}
            <strong>
              <span>HILUX</span>
            </strong>
            . All Rights Reserved
          </div>

          <div className="credits">
            {" "}
            Designed by{" "}
            <a href="https://privatechnologies.in/" target="_blank">
              PRIVA TECHNOLOGIES
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}
