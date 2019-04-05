import React from "react";
import Bookmark from '../bookmarks/index'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import CondNav from "../condnav";
//import {CardColumns} from "reactstrap";

let name;
class View extends React.Component {

    constructor(props){
        super(props);
        name=(this.props.location.state.category)
        console.log(name)
        this.onButtonChange =this.onButtonChange.bind(this);
        this.state = {
          data : [],
          id:''
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
        //const url = "http://localhost:9000/books"; 
        const url = "http://10.10.200.19:9000/books/category?name="+name;
        console.log(url) 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }


    render() {
       
        return (
            <div>
                <CondNav/>
            <br/><br/><br/><br/>
            <div>
                
               <br/><br/><center>
                <h3><b>VIEW BOOKS</b></h3>
                </center>
                <br></br>
               
                
                 
                
               {/* <div style={{display: 'inline-block'}}>*/}
               <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
               {this.state.data.map((book,index) =>{
                    
                return(
                   
                    <Card style={{width:'300px', margin:'10px', height:'500px'}}>
                    <CardImg top width="10%" height="55%" src={book.imageUrls} alt="Card image cap" />
                    <CardBody>
                    <center>
                      <CardTitle><strong>Title:{book.title}</strong></CardTitle>
                      <CardSubtitle><strong>Author:{book.author}</strong></CardSubtitle>
                      <CardTitle><strong> Location: {book.user.address}</strong></CardTitle>
                      </center>
                      
                      <hr/>
                      <div style={{float:'right'}}>
                      <Bookmark id={book.id} /></div>
                      {/*<CardSubtitle>{book.category}</CardSubtitle>
                      <CardSubtitle>{book.count}</CardSubtitle>
                  <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
                  
                  <CardTitle><strong>Price:  Rs {book.price}</strong></CardTitle>
                  {/* <MapLocate data={this.state.data} history={this.props.history}/> */}
                  <center>
                  {/* <Button onClick={this.onButtonChange} value={book.id}>Details</Button> */}
                  </center>
                    </CardBody>
                  </Card>

                       
                    
                    
                    )
                })}
               
                </div>
                <br></br>
                </div>
                </div>
              
                
            
        );
    }
} 

export default View;