import React from 'react'
import './App.css';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';

function App() {
  return (
  <Container>
    <Card style={{textAlign:'center', color:'darkslategrey'}}>
      <Card.Header><h2>My Favorite Foods List</h2></Card.Header>
    </Card>
    <Row style={{marginTop:'5%', textAlign:'center'}}>
          <Col sm = {4}><h3>Add or Edit</h3></Col>
          <Col sm = {8}><h3>Foods List</h3></Col>
    </Row>
    <Row>
          <Col sm = {4}>
            {/* Content */}
          </Col>
          <Col sm = {8}>
            <FoodList></FoodList>
          </Col>
    </Row>
  </Container>
  );
}

export default App;
