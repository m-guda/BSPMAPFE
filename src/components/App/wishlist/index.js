import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
import Footer from '../footer';
import { Col, Row, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { CardColumns } from "react-bootstrap";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import CreatedBook from '../updatebook/createdbook'
import MdHeart from 'react-ionicons/lib/MdHeart';
var body;
var user={}
var favorites=[]
export default class Wishlist extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
          data:[],
          favorites:[],
          users:[]
        }
        this.onButtonChange=this.onButtonChange.bind(this);
       // this.handleChange = this.handleChange.bind(this);
        //this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
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
      
      history = createHistory(this.props);
      componentDidMount(e) {
        //.e.preventDefault();  
        let token = localStorage.getItem("AccessToken");
        let headers = new Headers();
        const AuthStr = 'Bearer '.concat(token);
         console.log(token);
        const url = "http://10.10.200.19:9000/profile?Token="+token; 
        console.log(url)
        // let token = localStorage.getItem("AccessToken");
       
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         headers.append('Authorization', AuthStr);
         console.log(AuthStr);
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
         headers.append( 'GET','POST');
    
    //e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'GET',
        // body: JSON.stringify(body),
        // 'Authorization': 'Bearer ' + this.state.token, 
    })
    .then(response=>response.json())
    .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
    this.setState ({
    data : contents}
    )
})


  .catch(() => console.log("Can’t access " + url + " response. "))
      }
  render() {
    return (
        <div   style={{backgroundImage: "url(" + "http://avante.biz/wp-content/uploads/Library-Backgrounds/Library-Backgrounds-031.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
       }}>
            <CondNav/><br/><br/><br/><br/><br/><br/>
            
        <div class="container"><div className="card">
           <div class="card-body" >
           <h3><center>Favorites</center></h3>
        <div class="row">
         {/* <div className="col md-2"></div>  */}
        
            <div  className= "col md-3" >
               
                <div class="author-card pb-3">
                  
                    <div class="author-card-profile">
                        <div class="author-card-avatar"><img src="data:image/png;base64,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" alt="Daniel Adams"/>
                        </div>
                        <div class="author-card-details">
                           <br/> {this.state.username}{console.log(this.state)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                        </div>
                    </div>
                </div>
                <div class="wizard">
                    <nav class="list-group list-group-flush" style={{width: '200px'}}>
                        {/* <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-shopping-bag mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                                </div><span class="badge badge-secondary"></span>
                            </div> */}
                        {/* </a> */}
                        <a class="list-group-item active" style={{width: '200px'}} href="#">MY WISHLIST</a>
                        <a class="list-group-item" href="/profile">
                           
                               
                                    <div class="d-inline-block font-weight text-uppercase">View profile</div>
                               
                        </a>
                        <a class="list-group-item" href="/viewcreated">
                           
                               
                           <div class="d-inline-block font-weight text-uppercase">Created Book</div>
                      
               </a>
                        <a class="list-group-item" href="/updateprofile" >
                            <div class="d-flex justify-content-between ">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight text-uppercase">Update Profile</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a>
                    
                    </nav>
                </div>
            </div>
            {/* <div className="col md-1"></div> */}
           
            <div className="col md-3" >
<br/><br/><br/><br/>
<Form>{this.state.data.map((ProfileDetails, index)=> {
            //   this.setState({favorites:ProfileDetails.favorites})
            // this.setState({users:ProfileDetails.user})
            //favorites=ProfileDetails.favorites[0]
            console.log(ProfileDetails.favorites)
            if(ProfileDetails.favorites != undefined ) {
                for(let i=0;i<ProfileDetails.favorites.length;i++){
                favorites[i]=ProfileDetails.favorites[i]
                console.log(favorites[i].name)}
            }
            user=ProfileDetails.user
           
            
            })}
                    {console.log(user)}
  
                
               

                
            </Form>
           
            
                {/* <CardTitle>Favourites:</CardTitle> */}
                
                
                <CardColumns>
                <div> {favorites.map((fav,index)=>{
                        return(
                          
                            <Card width="100%">       
                               <CardImg top width="100%" src={fav.imageUrls[0]} alt="Card image cap" height="200px"/> 
                               <CardBody>
            <center>
              <CardTitle><strong>Title:{fav.title}</strong></CardTitle>
              <CardSubtitle><strong>Author:{fav.author}</strong></CardSubtitle>
              <CardTitle><strong> Location: {fav.user.address}</strong></CardTitle>
              </center>
              
              <hr/>
              <div style={{float:'right'}}>
              {/* <Bookmark id={fav.id} /> */}
              <MdHeart fontSize="40px" color="red"  />
              </div>
              {/*<CardSubtitle>{book.category}</CardSubtitle>
              <CardSubtitle>{book.count}</CardSubtitle>
          <CardSubtitle>{book.user.username}</CardSubtitle>{console.log('printing username............'+book.username)}*/}
          
          <CardTitle><strong>Price:  ${fav.price}</strong></CardTitle>
          {/* <MapLocate data={this.state.data} history={this.props.history}/> */}
          <center>
          <Button onClick={this.onButtonChange} value={fav.id}>Details</Button></center>
            </CardBody>
                            </Card>
                            
             
              
                           
                            )
                    }
                    )}

                </div>

                </CardColumns>
            
            <br />
                       

                     </div>
            </div>
       
        </div>
        </div></div>
        <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>  <br/><br/>
      
            <Footer/>
       
       </div>
      
    );
  }
}