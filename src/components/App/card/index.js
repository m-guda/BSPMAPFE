import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

 import {withRouter} from 'react-router-dom';
import Bookmark from '../bookmarks';
import MapLocate from '../maplocate/maplocate'
let id;
class Cards extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      data : []
  
    }
    this.onButtonChange=this.onButtonChange.bind(this);
    this.onButtonClick=this.onButtonClick.bind(this);
}
onButtonChange(event) {
  this.setState(
    {id:event.currentTarget.value}, ()=>{
    console.log("id.........."+this.setState.id)
  }
  
  );
  console.log("state........."+this.state.id)

  let path=`viewmore`;
  
 this.props.history.push({
    pathname: path,
    state: {
       id:event.currentTarget.value,
      //  data: books

    }
    
   });
  
   
}
onButtonClick(event) {
  this.setState(
    {id:event.currentTarget.value}, ()=>{
    console.log("id.........."+this.state.id)
  }
  
  );
  console.log("state........."+this.setState.id)

  let path=`maplocate`;
  
 this.props.history.push({
    pathname: path,
    state: {
      data : []

    }
    
   });
   console.log("pushstate........."+this.state.id)
   
}

render() {
  return (
    
    <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
      {
        
        this.props.books.map((book) => {
          return (
          
            <Card style={{width:'300px', margin:'10px', height:'550px'}}>
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
          <Button onClick={this.onButtonChange} value={book.id}>Details</Button></center>
            </CardBody>
          </Card>
          )
        })
      }

    </div>
  );
    }
};

export default withRouter(Cards);
