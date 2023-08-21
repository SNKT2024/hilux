import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Row, Table } from "react-bootstrap";
import "../../css/table.css";
import axios from "axios";

export default function Category_Fourteen() {
  return (
    <>
      <Container className="mt-2">
        <h1>Nutraceutical Products</h1>
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
//     axios.get("http://localhost:8081/category_six").then((res) => {
//       setData(res.data.data);
//     });
//   };

//   const one = data.slice(0, 16);
//   const two = data.slice(16, 51);
//   const three = data.slice(51, 117);
//   const four = data.slice(117, 125);
//   const five = data.slice(125, 132);
//   const six = data.slice(132, 175);
//   const seven = data.slice(175, 188);
//   const eight = data.slice(188, 204);
//   const nine = data.slice(204, 218);
//   const ten = data.slice(218, 246);
//   const eleven = data.slice(246, 252);
//   const twelve = data.slice(252, 262);
//   const thirteen = data.slice(262, 269);
//   const fourteen = data.slice(269, 283);

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <Container fluid>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Gummy Candies</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {one.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Gynee Suplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {two.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">
//           Immunity & Multivitamin Supplement
//         </h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {three.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Liver Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {four.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Opthal Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {five.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Orthopedic Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {six.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Gastrointenstinal Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {seven.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Feffervescent Tablets</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {eight.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Infertiltiy & PCOS Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {nine.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">
//           Brain, Memory & Neuro Supplement
//         </h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {ten.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">UTI Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {eleven.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Protien Supplement</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {twelve.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Cardiac</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {thirteen.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//       <Row>
//         <h1 className="text-center mt-3 mb-2">Derma</h1>

//         <Table className="rounded" striped hover responsive="sm">
//           <thead className="yellow-thead">
//             <tr>
//               <th>Sr.No</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Form</th>
//             </tr>
//           </thead>
//           <tbody>
//             {fourteen.map((eachData, i) => {
//               return (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   <td>{eachData.name}</td>
//                   <td>{eachData.description}</td>
//                   <td>{eachData.form}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       </Row>
//     </Container>
//   );
// };

const TB = () => {
  const [data, setData] = useState([]);
  let [selectedProductName, setSelectedProductName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = () => {
    axios.get("http://localhost:8081/category_six").then((res) => {
      setData(res.data.data);
    });
  };
  const one = data.slice(0, 16);
  const two = data.slice(16, 51);
  const three = data.slice(51, 117);
  const four = data.slice(117, 125);
  const five = data.slice(125, 132);
  const six = data.slice(132, 175);
  const seven = data.slice(175, 188);
  const eight = data.slice(188, 204);
  const nine = data.slice(204, 218);
  const ten = data.slice(218, 246);
  const eleven = data.slice(246, 252);
  const twelve = data.slice(252, 262);
  const thirteen = data.slice(262, 269);
  const fourteen = data.slice(269, 283);

  useEffect(() => {
    getData();
  }, []);

  const handleOrderClick = (productName) => {
    setSelectedProductName(productName);

    setIsModalOpen(true);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <h1 className="text-center mt-3 mb-2">Gummy Candies</h1>

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
              {one.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Gynee Suplement</h1>

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
              {two.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Immunity & Multivitamin Supplement
          </h1>

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
              {three.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Liver Supplement</h1>

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
              {four.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Opthal Supplement</h1>

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
              {five.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Orthopedic Supplement</h1>

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
              {six.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Gastrointenstinal Supplement
          </h1>

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
              {seven.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Feffervescent Tablets</h1>

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
              {eight.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Infertiltiy & PCOS Supplement
          </h1>

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
              {nine.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Brain, Memory & Neuro Supplement
          </h1>

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
              {ten.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">UTI Supplement</h1>

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
              {eleven.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Protien Supplement</h1>

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
              {twelve.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Cardiac</h1>

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
              {thirteen.map((eachData, i) => {
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
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Derma</h1>

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
              {fourteen.map((eachData, i) => {
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
        </Row>
        <Popup
          show={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          selectedProductName={selectedProductName}
          category="Nutraceutical Products"
        />
      </Container>
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
