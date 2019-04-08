// import React from "react";
// import Search from "../search"
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';
// import {CardColumns} from "reactstrap";
// import Bookmark from '../bookmarks';
// import "./Book.css";
// import CondNav from "../condnav";

// var name;
// var name1;
// var body;
// var id;
// class SearchDetails extends React.Component {

//     constructor(props){
//         super(props);
//         name=(this.props.location.state.name)
//         name1=(this.props.location.state.name1)
//         console.log(name)
//         this.onButtonChange =this.onButtonChange.bind(this);
//         this.state = {
//           data : [],
//           id:   "",
//           markers: [],
//         }
//       }
    

//       handleClick = (e) => {
//         this.props.setMarker({
//           latitude: e.latlng.lat,
//           longitude: e.latlng.lng 
//         });
//       };

//       onButtonChange(event) {
//         this.setState({id:event.currentTarget.value}, ()=>{
//           console.log(this.state.id)
//         }
        
//         );
//         console.log(this.state.id)
//         let path=`viewmore`;
        
//        this.props.history.push({
//           pathname: path,
//           state: {
//              id:event.currentTarget.value
//           }
//          });
         
//       }

      
      
//     componentDidMount() {
//        const url = "http://10.10.200.19:9000/books/search"; 
//      //const url = "http://localhost:9000/books/search?title="+name;
//         console.log(url) 
//         body = { title: name,
//         author:name1 }
//         let headers = new Headers();

//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');

//         headers.append('Access-Control-Allow-Origin', url);
//         headers.append('Access-Control-Allow-Credentials', 'true');

//         headers.append('POST','PUT');

//         fetch(url, {
//             headers: headers,
//             method: 'POST',
//             body:JSON.stringify(body)
//         })
//         .then(response => response.json())
//         .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
//         this.setState ({
//            data : contents,
//            setMarker = ({latitude, longitude}) => {
//             this.setState({
//               markers: [...this.state.markers, {
//                 contents.user.latitude,

                 
//               }]
//             })
//           }
//               }
//           )
                            
                        
//                         })
           
            
//         .catch(() => console.log("Can’t access " + url + " response. "))
//       }


//     render() {
       
//         return (
//             <div> 
            
//                <CondNav/>
//                <br></br>
//                <br></br> <br></br> <br></br> <br></br>
//                 <br></br>
//                 <div style={{position:'relative'}}>
               
//                 <Search/> 
//                 <br></br>
//                 <label><strong><h3>Search Results:</h3></strong></label>
//                 {/*<div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>*/}
//                 <br></br>
//                 <br/>
//                 {console.log(this.state.data)}
//                 <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
//                {this.state.data.map((book,index) =>{
//                     console.log("in map")
//                 return(
                   
//                     <Card style={{width:'500px', margin:'10px', height:'900px'}}>
//                     <CardImg top width="20%" height="65%" src={book.imageUrls} alt="Card image cap" />
//                     <CardBody>
//                       <CardTitle>Title:{book.title}</CardTitle>
//                       <CardSubtitle>Author:{book.author}</CardSubtitle>
//                       <CardTitle>Location:  {book.user.address}</CardTitle>
                      
//                       <a onClick={this.onButtonChange} href="/viewmore">Details</a>
//                       <hr/>
//                       <Bookmark id={book.id}/>
//                       {/*<CardSubtitle>{book.category}</CardSubtitle>
//                       <CardSubtitle>{book.count}</CardSubtitle>
//                   <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
                  
//                   <CardTitle>Price:  ${book.price}</CardTitle>
//                   {/* <MapLocate data={this.state.data} history={this.props.history}/> */}
//                        <Button onClick={this.onButtonClick} id={book.id}>Locate Book</Button>
//                     </CardBody>
//                   </Card>

                       
                    
                    
//                     )
//                 })}
               
//                 </div>
//                 <br></br>
//                 </div>
//                 </div>
            
                
            
//         );
//     }
// } 

// export default SearchDetails;

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
var name1;
var body;
var id;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
        name=(this.props.location.state.name)
        name1=(this.props.location.state.name1)
        console.log(name)
        this.onButtonChange =this.onButtonChange.bind(this);
        this.state = {
          data : [],
          id:""
        }
      }
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
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
        body = { title: name,
        author:name1 }
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
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View Book Location</Button> */}
        {/* <Collapse isOpen={this.state.collapse}> */}
        <div className="container" style={{float:'right'}}>
        <Maprender data={this.state.data} history={this.props.history}/></div>
        {/* </Collapse> */}
      </div>
                <br></br>
                <br/>


               

               
</div>
                {console.log(this.state.data)}
                <div style={{display: 'flex', flexWrap:'wrap', margin: '5px'}}>
               {this.state.data.map((book,index) =>{
                    console.log("in map")
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
                  <Button onClick={this.onButtonChange} value={book.id}>Details</Button></center>
                    </CardBody>
                  </Card>

                       
                    
                    
                    )
                })}
               
                </div>
                <br></br>
                </div>
               
            
                
            
        );
    }
} 

export default SearchDetails;