import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from "../table/index";
import axios from "axios";
//import "../homepage/Book.css";
class Booktable extends React.Component{
    state = {
        users: []
      };
    
    componentDidMount() {
        axios
          .get("http://10.10.200.19:9000/users")
          .then(response => {
            console.log(response)
            // create an array of contacts only with relevant data
      
            this.setState({users: response.data});
    
            // store the new state object in the component's state
            
          })
          .catch(error => console.log(error));
     }
     render(){
        console.log(this.state.users)
        return(
            <div>
                <Tables users={this.state.users} />
            </div>
             );
            }
        }
        export default Booktable; 