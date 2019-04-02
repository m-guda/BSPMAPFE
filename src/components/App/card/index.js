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
    console.log("id.........."+this.state.id)
  }
  
  );
  console.log("state........."+this.setState.id)

  let path=`viewmore`;
  
 this.props.history.push({
    pathname: path,
    state: {
       id:event.currentTarget.value,

    }
    
   });
   console.log("pushstate........."+this.state.id)
   
}
onButtonClick(event) {
  let path=`maplocate`;
  
  this.props.history.push({
     pathname: path,
     state: {
        id:event.currentTarget.value,
 
     }
     
    });
  }
  
   


render() {
  return (
    
    <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
      {
        
        
        this.props.books.map((book) => {
          return (
            <Card style={{width:'500px', margin:'10px', height:'900px'}}>
            <CardImg top width="20%" height="65%" src={book.imageUrls} alt="Card image cap" />
            <CardBody>
              <CardTitle>Title:{book.title}</CardTitle>
              <CardSubtitle>Author:{book.author}</CardSubtitle>
              <CardTitle>Location:  {book.user.address}</CardTitle>
              
              <a onClick={this.onButtonChange} href="/viewmore">Details</a>
              <hr/>
              <hr/><Bookmark id={book.id}/>
              {/*<CardSubtitle>{book.category}</CardSubtitle>
              <CardSubtitle>{book.count}</CardSubtitle>
          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
          
          <CardTitle>Price:  ${book.price}</CardTitle>
          {/* <MapLocate data={this.state.data} history={this.props.history}/> */}
               <Button onClick={this.onButtonClick} value={book.id}>Locate Book</Button>
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
