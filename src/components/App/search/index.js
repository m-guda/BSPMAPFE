import React from "react"
import { Container, Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import SearchDetails from "../searchDetails";
import "./search.css";
import Footer from "../footer";

import MdSearch from 'react-ionicons/lib/MdSearch';
class Search extends React.Component{

    constructor(props){
        super(props);
        this.onButtonClick =this.onButtonClick.bind(this)
        this.handleChange =this.handleChange.bind(this)
        this.state = {
          data : [{ }]
        }
      }
      onButtonClick() {     
        let name=this.state.search
        console.log(name);
      //   console.log(this.props.location.pathname)
      //   if(this.props.location.pathname == "/Search")
      //  // <SearchDetails name={this.state.name}/>
      //      window.location.reload()
       let path=`search`;
       this.props.history.push({
          pathname: path,
          state: {
           name:name
          }
         });
           
    }

      handleChange(e) {
        this.setState({search: e.target.value});
     }

      
    render() {
                   
        return(
            <div class="container"> 
                    <Row >
                    <div class="input-group">
    <input type="text" class="form-control" placeholder="Search the book by title and author"  style={{height:'150%'}} onChange={this.handleChange}/>
    <div class="input-group-append">
    
      <button class="btn btn-secondary" type="button" onClick={this.onButtonClick}>
      <MdSearch/>
      </button>
    </div>
  </div>
                    </Row>
                    
            </div>
           
        )
    }

}

export default withRouter(Search);