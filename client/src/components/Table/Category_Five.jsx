import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Table } from "react-bootstrap";
import "../../css/table.css";
import axios from "axios";

export default function Category_Five() {
  return (
    <>
      <Container className="mt-2">
        <h1>Gastrointestinanl Drugs</h1>
      </Container>
      <Container className="mt-3">
        <TB />
      </Container>
    </>
  );
}

// const TB = () => {
//   const [data, setData] = useState([]);

//   const getData = () => {
//     axios.get("http://localhost:8081/category_fifteen").then((res) => {
//       setData(res.data.data);
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <Table className="rounded" striped hover responsive>
//       <thead className="yellow-thead">
//         <tr>
//           <th>Sr.No</th>
//           <th>Name</th>
//           <th>Description</th>
//           <th>Form</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((eachData, i) => {
//           return (
//             <tr key={i}>
//               <td>{i + 1}</td>
//               <td>{eachData.name}</td>
//               <td>{eachData.description}</td>
//               <td>{eachData.form}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </Table>
//   );
// };
const TB = () => {
  const [data, setData] = useState([]);
  let [selectedProductName, setSelectedProductName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = () => {
    axios.get("http://localhost:8081/category_fifteen").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOrderClick = (productName) => {
    setSelectedProductName(productName);

    setIsModalOpen(true);
  };
  return (
    <>
      <Table className="rounded" striped hover responsive="sm">
        <thead className="yellow-thead">
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Form</th>
            <th className="text-center">Inquiry</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{eachData.name}</td>
                <td>{eachData.description}</td>
                <td>{eachData.form}</td>
                <td>
                  <Button
                    className="ms-3"
                    onClick={() => {
                      handleOrderClick(eachData.name);
                    }}
                  >
                    Order
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Popup
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        selectedProductName={selectedProductName}
        category="Gastrointestinanl Drugs"
      />
    </>
  );
};

const Popup = ({ show, handleClose, selectedProductName, category }) => {
  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className="text-center mod-header">
          <h5 className="text-center">Product Inquiry</h5>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Name" type="name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact No</Form.Label>
              <Form.Control placeholder="Contact No" type="number" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Email" type="email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control value={`${selectedProductName}`} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control value={category} />
            </Form.Group>
            <Form.Group className="text-center mt-4 mb-3 ">
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
