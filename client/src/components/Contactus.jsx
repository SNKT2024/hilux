import React from "react";
import { Button, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import "../css/contact.css";

export default function Contactus() {
  return (
    <>
      <Container className="app-container">
        <Row>
          <ContactForm />
        </Row>
      </Container>
    </>
  );
}

const ContactForm = () => {
  return (
    <>
      <Container className="form-container p-0 mt-3">
        <Form className="form">
          <Form.Group>
            <h1 className="text-center mb-3">Contact Us</h1>
          </Form.Group>
          <Form.Group className="mt-5">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your contact no"
              required
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Address</Form.Label>
            <FloatingLabel label="Address">
              <Form.Control
                as="textarea"
                placeholder="Address"
                style={{ height: "120px" }}
              ></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="text-center mt-4 mb-3 ">
            <Button type="submit" className="submit-button">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
