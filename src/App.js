import React from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Card style={{ textAlign: "center", color: "darkslategrey" }}>
        <Card.Header>
          <h2>My Favorite Foods List</h2>
        </Card.Header>
      </Card>
      <br />
      <Row>
        <Col sm={12}>
          <FoodList></FoodList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
