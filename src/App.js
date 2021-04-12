import React, {Component} from 'react'
import './App.css';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card} from 'react-bootstrap';
import FilterFood from './components/FilterFood';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      filterKind: '',
      filterStatus: null
    }
  }
  changeselectedKind = (selectedKind) => {
   // console.log(selectedKind);
    if(selectedKind === 1){
      this.setState({
        filterKind: "food",
      });
    } else if (selectedKind === 0) {
      this.setState({
        filterKind: "drink",
      });
    }
    else{
      this.setState({
        filterKind: '',
      });
    }
    //console.log(this.state.filterKind);
  }
  changeselectedStatus = (selectedStatus) =>{
    if(selectedStatus === 1){
      this.setState({
        filterStatus: true
      });
    } else if (selectedStatus === 0) {
      this.setState({
        filterStatus: false
      });
    }
    else{
      this.setState({
        filterStatus: null
      });
    }
  }
  render(){
    return (
      <Container>
        <Card style={{textAlign:'center', color:'darkslategrey'}}>
          <Card.Header><h2>My Favorite Foods List</h2></Card.Header>
        </Card>
        <Row style={{marginTop:'5%', marginBottom:'2%'}}>
          <Col sm = {12}>
            <Row >
              {/* <Col sm = {1}><h3>Filter</h3></Col> */}
              <Col sm = {2}>
                <FilterFood
                  changeselectedStatus = {this.changeselectedStatus}
                  filterStatus = "1"
                  option0="Filter Status"
                  option1 = "All"
                  option2 = "Must Try"
                  option3 = "Yummy"
                ></FilterFood>
              </Col>
              
              <Col sm = {2}>
                <FilterFood 
                  changeselectedKind = {this.changeselectedKind}
                  filterKind = "1"
                  option0 = "Filter Kind"
                  option1 = "All"
                  option2 = "Drink"
                  option3 = "Food"
                ></FilterFood>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm = {12}>
            <FoodList
              toShowFood = {this.state.filterKind}
              toShowFood2 = {this.state.filterStatus}
            ></FoodList>
          </Col>
        </Row>
      </Container>
      );
  }
  
}

export default App;
