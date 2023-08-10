import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/Products/1 (1).jpg";
import img2 from "../assets/images/Products/1 (2).jpg";
import img3 from "../assets/images/Products/1 (3).jpg";
import img4 from "../assets/images/Products/1 (4).jpg";
import img5 from "../assets/images/Products/1 (5).jpg";
import img6 from "../assets/images/Products/1 (6).jpg";
import img7 from "../assets/images/Products/1 (7).jpg";
import img8 from "../assets/images/Products/1 (8).jpg";
import img9 from "../assets/images/Products/1 (9).jpg";
import img10 from "../assets/images/Products/1 (10).jpg";
import img11 from "../assets/images/Products/1 (11).jpg";
import img12 from "../assets/images/Products/1 (12).jpg";
import img13 from "../assets/images/Products/1 (13).jpg";
import img14 from "../assets/images/Products/1 (14).jpg";
import img15 from "../assets/images/Products/1 (15).jpg";
import img16 from "../assets/images/Products/1 (16).jpg";
import img17 from "../assets/images/Products/1 (17).jpg";
import img18 from "../assets/images/Products/1 (18).jpg";

import "../css/products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Analgesics medicine",
      to: "/category_one",
      img: img1,
    },
    {
      id: 2,
      name: "Anti allergic medicine",
      to: "/category_two",

      img: img2,
    },
    {
      id: 3,
      name: "Antidiabetic drug",
      to: "/category_three",

      img: img3,
    },
    {
      id: 4,
      name: "Antibiotics/   Antifungal  ",
      to: "/category_four",

      img: img4,
    },
    {
      id: 5,
      name: "Gastrointestinal drugs",
      to: "/category_five",

      img: img5,
    },
    {
      id: 6,
      name: "Nephrology medicines",
      to: "/category_six",

      img: img6,
    },
    {
      id: 7,
      name: "Antimalaria Drugs",
      to: "/category_seven",

      img: img7,
    },
    {
      id: 8,
      name: "Cardiovascular Drugs ",
      to: "/category_eight",

      img: img8,
    },
    {
      id: 9,
      name: "Erectile Dysfunction",
      to: "/category_eleven",

      img: img9,
    },
    {
      id: 10,
      name: "Neurophycotic",
      to: "/category_twelve",

      img: img10,
    },
    {
      id: 11,
      name: "Pediatric Medicine",
      to: "/category_thirteen",

      img: img11,
    },
    {
      id: 12,
      name: "Nutraceutical Products",
      to: "/category_fourteen",

      img: img12,
    },
    {
      id: 13,
      name: "Co-Organic Products",
      to: "/category_fifteen",

      img: img13,
    },
    {
      id: 14,
      name: "Dermatology",
      to: "/category_sixteen",

      img: img14,
    },
    {
      id: 15,
      name: "Cosmetic",
      to: "/category_seventeen",

      img: img15,
    },
    {
      id: 16,
      name: "Ointments",
      to: "/category_eighteen",

      img: img16,
    },
    {
      id: 17,
      name: "Dry Syrup",
      to: "/category_nineteen",

      img: img17,
    },
    {
      id: 18,
      name: "Dry Powder Injection",
      to: "/category_twenty",

      img: img18,
    },
  ];
  return (
    <>
      <h1 className="text-center mb-5 mt-4">PRODUCTS</h1>
      <Container className="">
        <Row lg={4} xs={1} md={2} className="row-main">
          {products.map((products) => (
            <Link to={products.to} key={products.id}>
              <Col className="mb-3 col-main" key={products.id}>
                <Cards productName={products.name} image={products.img} />
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
}

const Cards = ({ productName, image }) => {
  return (
    <>
      <Card className="card-pro">
        <Row className="card-row" md={2}>
          <Col className="text-col" xs={8}>
            <Card.Body className="p-0 m-0 card-body">
              <p className="card-text p-2">{productName}</p>{" "}
              {/* Apply card-text class */}
            </Card.Body>
          </Col>
          <Col className="col-img" xs={4}>
            <Image src={image} fluid className="img-pro rounded" />
          </Col>
        </Row>
      </Card>
    </>
  );
};
