import React from "react";
import Search from "../search"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";

import "./Book.css";
import CondNav from "../condnav";

var name;
var body;
var id;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        name=(this.props.location.state.name)
        console.log(name)
        this.onButtonChange =this.onButtonChange.bind(this);
        this.state = {
          data : [],
          id:""
        }
      }
    
      onButtonChange(event) {
        this.setState({id:event.currentTarget.value}, ()=>{
          console.log(this.state.id)
        }
        
        );
        console.log(this.state.id)
        let path=`viewmore`;
        
       this.props.history.push({
          pathname: path,
          state: {
             id:event.currentTarget.value
          }
         });
         
      }
    componentDidMount() {
       const url = "http://10.10.200.19:9000/books/search"; 
     //const url = "http://localhost:9000/books/search?title="+name;
        console.log(url) 
        body = { title: name }
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('POST','PUT');

        fetch(url, {
            headers: headers,
            method: 'POST',
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents}
                            )
            })
            
        .catch(() => console.log("Can’t access " + url + " response. "))
      }


    render() {
       
        return (
            <div> 
            
               <CondNav/>
               <br></br>
               <br></br> <br></br> <br></br> <br></br>
                <br></br>
                <div style={{position:'relative'}}>
               
                <Search/> 
                <br></br>
                <label><strong><h3>Search Results:</h3></strong></label>
                {/*<div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>*/}
                <br></br>
                <br/>
                {console.log(this.state.data)}
                <div style={{display: 'inline-block'}}>
                <div>{this.state.data.map((Booksplorer,index) =>{
                    console.log("in map")
                return(
                   
                    <Card style={{width:'350px', margin:'10px'}}>
                    <CardImg top width="30%" src={Booksplorer.imageUrls[0]} alt="Card image cap" />
                       <CardBody> 
                           <div key={index}>
                               <CardTitle>{Booksplorer.title}</CardTitle>
                               <CardSubtitle>{Booksplorer.author}</CardSubtitle>
                               <CardText>{Booksplorer.price}</CardText>
                               <CardText>{Booksplorer.username}</CardText>
                               <CardText>{Booksplorer.id}</CardText>
                               <Button onClick={this.onButtonChange} value={Booksplorer.id}>view more</Button>  
                               </div>
                           
                       </CardBody>
                   </Card>

                       
                    
                    
                    )
                })}
                </div>
                </div>
                <br></br>
                </div>
                </div>
            
                
            
        );
    }
} 

export default SearchDetails;