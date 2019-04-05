import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCol,
  MDBInput
} from "mdbreact";
import {Modal, Alert} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';


var body;
var id;


class CreatedBook extends React.Component{

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
                <br/><br/><br/><br/><br/>
                <div class="container">
              <Button
                  type="submit"
                 
                  variant="contained"
                  color="primary"
                  onClick={this.handleShow}
                >
             Created Books
          </Button>
          </div>
      <Modal show={this.state.show} onHide={this.handleClose}  
          dialogClassName="modal-200w"
          aria-labelledby="example-custom-modal-styling-title">
      <Modal.Header closeButton style={{backgroundColor: "white", color: "black"}}>
     
              <Modal.Title><p className="h3 text-center mb-4"><br/><br/>CREATED BOOKS</p></Modal.Title>
            </Modal.Header>
        <Modal.Body>
       <MDBContainer>
       <MDBRow>
        <MDBCol md="6">
       <div className="panel panel-default p50 uth-panel">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>TITLE</th>
                            
                            <th>AUTHOR</th>

                            <th>COUNT</th>

                            {/* <th>SELLER</th> */}

                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((books,index) => {
            return(
                  <tr >
                    <td>{books.title}</td>
                    <td>{books.author}</td>
                    <td>{books.count}</td>
                    {/* <td>{books.user.username}</td> */}

                    <td>
                      <Button variant="contained" color="secondary" onClick={this.handleEdit} value={books.id} style={{margin : "4px"}}>Edit</Button>
                  <Button variant="contained" color="secondary" style={{margin : "4px"}} 
                  onClick= {this.handleDelete}
                  value={books.id}>Delete</Button>

                  
                  </td>
                  </tr>
            )}
            )}
                    </tbody>
                </table>
            </div>
            </MDBCol>
    </MDBRow>
     
    </MDBContainer>
    </Modal.Body>
    <Modal.Footer >
          
              <Button onClick={this.handleClose} type="submit"
                  
                  variant="contained"
                  color="primary"
                  style={{margin : "4px"}}
                  >  Done </Button>
            </Modal.Footer>
    </Modal>

   
      </div>
      
          );
       
    }

    
    
}
 

export default withRouter(CreatedBook);