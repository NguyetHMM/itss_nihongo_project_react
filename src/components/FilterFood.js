import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class FilterFood extends Component{
    
    constructor() {
        super();
        this.state = {
            checkOption: null
        }
        this.handleChange = this.handleChange.bind(this);
      }
        
      handleChange(event) {
        console.log(this.props);
        if(this.props.filterKind != null){
            console.log("sap xep theo kind");
            this.props.changeselectedKind(parseInt(event.target.value));
        } else if (this.props.filterStatus != null){
            console.log("sap xep theo status");
            this.props.changeselectedStatus(parseInt(event.target.value));
        }
      }
    render(){
        return (
            <select 
                className="form-control"
                name="filterbox"
                onChange={this.handleChange}
            >
              <option>{this.props.option0}</option>
              <option value={-1}>{this.props.option1}</option>
              <option value={0}>{this.props.option2}</option>
              <option value={1}>{this.props.option3}</option>
            </select>

          );
    }
}
export default FilterFood;
