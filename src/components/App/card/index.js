import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

 import {withRouter} from 'react-router-dom';

let id;
class Cards extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      data : []
  
    }
    this.onButtonChange=this.onButtonChange.bind(this);

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
       id:event.currentTarget.value

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
            <Card style={{width:'400px', margin:'10px', height:'500px'}}>
            <CardImg top width="20%" height="65%" src={book.imageUrls} alt="Card image cap" />
            <CardBody>
              <CardTitle>Title:{book.title}</CardTitle>
              <CardSubtitle>Author:{book.author}</CardSubtitle>
              <CardTitle>Price:  {book.price}</CardTitle>
              <CardTitle>Location:  {book.user.address}</CardTitle>
              {/*<CardSubtitle>{book.category}</CardSubtitle>
              <CardSubtitle>{book.count}</CardSubtitle>
          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
               <Button onClick={this.onButtonChange} value={book.id}>Details</Button>
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
