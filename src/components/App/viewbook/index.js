import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Cards from "../card/index";
import axios from "axios";
import "../card/Book.css";
import {withRouter} from 'react-router-dom';
import Footer from '../footer';

import CondNav from "../condnav";

class ViewBook extends React.Component {
    
  constructor() {
    super();
    this.state = {
        books: []
      };
     
    }  
      
   
 
    componentDidMount() {
        axios
          .get("http://10.10.200.19:9000/books")
          .then(response => {
            console.log(response)
            localStorage.getItem('token', response.data.token)
            this.setState({books: response.data});
    
         
          })
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
         
        })        
          .catch(error => console.log(error));
     }
    


    render(){
      console.log(this.state.books)
      return(
          <div>
        <CondNav/><br/><br/><br/><br/>
     
        <Cards books={this.state.books} />
        <br/><br/>
        <Footer/>
        </div>
      );
    }
       
}
export default withRouter(ViewBook);