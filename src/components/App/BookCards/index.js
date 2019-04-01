import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "../card/index";
import axios from "axios";
import "../card/Book.css";
class BookCards extends React.Component{
    state = {
        books: []
      };
    
    componentDidMount() {
        axios
          .get("http://10.10.200.19:9000/books")
          .then(response => {
            console.log(response)
            // create an array of contacts only with relevant data
      
            this.setState({books: response.data});
    
            // store the new state object in the component's state
            
          })
          .catch(error => console.log(error));
     }
     render(){
        console.log(this.state.books)
        return(
            <div>
                <Cards books={this.state.books} />
            </div>
             );
            }
        }
        export default BookCards; 