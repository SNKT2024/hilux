import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import "../../css/table.css";
import axios from "axios";

export default function Category_Four() {
  return (
    <>
      <Container className="mt-2">
        <h1>Antibiotics</h1>
      </Container>
      <Container className="mt-3">
        <TB />
      </Container>
    </>
  );
}

const TB = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8081/category_fourteen").then((res) => {
      setData(res.data.data);
    });
  };
  const firstTable = data.slice(0, 14);
  const secondTable = data.slice(14, 41);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Table className="rounded" striped hover responsive>
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              {firstTable.map((eachData, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{eachData.name}</td>
                    <td>{eachData.description}</td>
                    <td>{eachData.form}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Antifungal</h1>
          <Table className="rounded" striped hover responsive>
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
              </tr>
            </thead>
            <tbody>
              {secondTable.map((eachData, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{eachData.name}</td>
                    <td>{eachData.description}</td>
                    <td>{eachData.form}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
};
