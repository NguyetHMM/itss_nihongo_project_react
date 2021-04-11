import React from 'react'
import './App.css';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import FilterFood from './components/FilterFood';

function App() {
  return (
  <Container>
    <Card style={{textAlign:'center', color:'darkslategrey'}}>
      <Card.Header><h2>My Favorite Foods List</h2></Card.Header>
    </Card>
    <Row style={{marginTop:'5%', textAlign:'center'}}>
          <Col sm = {4}><h3>Add or Edit</h3></Col>
          <Col sm = {8}>
            <Row>
              <Col sm = {10}><h3>Food List</h3></Col>
              <Col sm = {2}><FilterFood></FilterFood></Col>
            </Row>
          </Col>
    </Row>
    <Row>
          <Col sm = {4}>
            {/* Content */}
          </Col>
          <Col sm = {8}>
            <FoodList
              //onFilter={this.onFilter}
            ></FoodList>
          </Col>
    </Row>
  </Container>
  );
}

export default App;
