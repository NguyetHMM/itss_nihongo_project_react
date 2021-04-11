import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodList from './FoodList';
class FilterFood extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterKind: -1,
        }
    }
    onChange = (event) => {

    }
    render(){
        var {filterKind} = this.state;
        return (
            <select 
                className="form-control" 
                name="filterKind"
                value = {filterKind}
                onChange={this.onChange}
            >
              <option value="grapefruit">All</option>
              <option value="drink">Drink</option>
              <option value="food">Food</option>
            </select>
          );
    }
}
export default FilterFood;
