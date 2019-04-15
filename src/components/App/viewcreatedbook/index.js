import React from "react";
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Search from "../search"
import { Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";
import Bookmark from '../bookmarks';
import "./Book.css";
import CondNav from "../condnav";
import Maprender from '../../maprender/maprender';

var name;
var body;
var id;
class Viewcreated extends React.Component {

    constructor(props) {
        super(props);
    
        this.state =
        {
          data : [],
          show: false,
          id: ""
    
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }
    
    
      handleEdit(event) {
    
        this.setState({id : event.currentTarget.value}, () => {
        console.log(this.state.id)
    
        let id =this.state.id
        console.log(id);
    
      
    
        console.log("sending id"+id)
        let path= `/editbook/`;
        this.props.history.push({
          pathname: path,
          state: {
            id: id
          }
       }) 
    
       
          });
        
      }
    
     handleDelete(event) {
        this.setState({id : event.currentTarget.value}, () => {
            console.log(this.state.id)
        
            let id =this.state.id
            console.log(id);
        
          
        
            
        
           
            
       console.log("Hey reached")
      body = { id : event.currentTarget.value }
      console.log(this.state.id)
      if(window.confirm('Delete the item?'))
      {
    
      
     console.log("fufhaeklr"+this.state.id)
        const url = "http://10.10.200.19:9000/books?id="+this.state.id; 
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    
        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');
    
        headers.append('PUT','POST','GET','DELETE');
    
        fetch(url, {
           headers:headers,
           method: 'DELETE',
           body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(contents => { console.log("In fetch: "+ contents);
         this.handleClose() 
         window.location.reload(); 
                                
     })
     .catch(()=> console.log("can't access" + url + "response. "))
    }
    });
     } 
    
    
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
        
    
    
      componentDidMount(event) {
    
        body = { accessToken: localStorage.getItem("AccessToken") }
        console.log(localStorage.getItem("AccessToken"))
       
          const url = "http://10.10.200.19:9000/books/token"; 
          let headers = new Headers();
    
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
    
          headers.append('Access-Control-Allow-Origin', url);
          headers.append('Access-Control-Allow-Credentials', 'true');
    
          headers.append('PUT','POST');
    
          fetch(url, {
             headers:headers,
             method: 'PUT',
             body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => { console.log("In fetch: "+ contents);
                              this.setState({
                                data : contents
                              })
                              console.log('test1 '+this.state)
            
                                  
       })
       .catch(()=> console.log("can't access" + url + "response. "))
       
        }
        
        render(){       
        return (
            <div> 
               <CondNav/>
               <br></br>
               <br></br> 
                    <div>
                        Created Book
                        <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
                        {this.state.data.map((book,index) => {
                        return(
                   
                            <Card style={{width:'300px', margin:'10px', height:'550px'}}>
                            <CardImg top width="10%" height="55%" src={book.imageUrls} alt="Card image cap" />
                            <CardBody>
                            <center>
                              <CardTitle><strong>Title:{book.title}</strong></CardTitle>
                              <CardSubtitle><strong>Author:{book.author}</strong></CardSubtitle>
                              <CardTitle><strong> Number of Books: {book.count}</strong></CardTitle>
                              </center>
                              
                              <hr/>
        
                              {/*<CardSubtitle>{book.category}</CardSubtitle>
                              <CardSubtitle>{book.count}</CardSubtitle>
                          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
                          <center>
                          <CardTitle><strong>Price:  Rs {book.price}</strong></CardTitle></center>
                          {/* <MapLocate data={this.state.data} history={this.props.history}/> */}
                          {/* <center>
                          <Button onClick={this.onButtonChange} value={book.id}>Details</Button></center> */}
                           <Button variant="contained" color="info" onClick={this.handleEdit} value={book.id} style={{margin : "4px"}}>Edit</Button>
                  <Button variant="contained" color="danger" style={{margin : "4px", float:'right'}} 
                  onClick= {this.handleDelete}
                  value={book.id}>Delete</Button>
                            </CardBody>
                          </Card>
        
                               
                            
                            
                            )
                       
                       })
                       
                       }
                       </div>
                    </div>
               </div>
                      );
    }
} 

export default Viewcreated;