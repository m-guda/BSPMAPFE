import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
var body;

export default class UpdateBook extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            price : "",
            count: "",
            
           
          }
      this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCountChange = this.handleCountChange.bind(this);
      };
      onUpdateClick(event) {

        console.log(this.state.username);
          
          let body = {
            price : this.state.price,
            count: this.state.count,
           
          }
          console.log(body)
          console.log(body.price)
          console.log(body.count)
        
          const url = "http://10.10.200.19:9000/books/update";
          console.log("url:"+url)
          let headers = new Headers();
       
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
       
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
       
          headers.append('PUT','POST');
       
          fetch(url, {
             headers:headers,
             method: 'PUT',
             body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => {console.log(contents);
          this.setState({ show: false });  
                         
       })
       .catch(()=> console.log("can't access" + url + " response. "))
      
       
        }
       
      
      history = createHistory(this.props);
      componentDidMount(e) {
        //.e.preventDefault();
        const url = "http://10.10.200.19:9000/books"; 
        let token = localStorage.getItem("AccessToken");
        let headers = new Headers();
        const AuthStr = 'Bearer '.concat(token);
         console.log(token);
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
        body: JSON.stringify(body),
        'Authorization': 'Bearer ' + this.state.token, 
    })
    .then(response=>response.json())
    .then(contents=>{console.log("in fetch: "+contents);
    this.setState({ username : contents.price,
    count : contents.count,
    
})
console.log('view details'+this.state)
})

 
  .catch(() => console.log("Can’t access " + url + " response. "))
  
    }
    handlePriceChange(event) {
        this.setState({ price: event.target.value})
        console.log("Price: " + this.state.price)
       
      }
     
    
      handleCountChange(event) {
        this.setState({ count: event.target.count})
        console.log("count: " + this.state.count)
      }
     
      
      
    
      
  render() {
    return (
        <div>
            <CondNav/><br/><br/>
        <div class="container mt-5">
        <div class="row">
        
            <div class="col-lg-4 pb-5">
               
                <div class="author-card pb-3">
                  
                    <div class="author-card-profile">
                        <div class="author-card-avatar"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                        </div>
                        <div class="author-card-details">
                           <br/> 
                           
                        </div>
                    </div>
                </div>
                <div class="wizard">
                    <nav class="list-group list-group-flush">
                        <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-shopping-bag mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a><a class="list-group-item" href="/profile">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">View Profile</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
    </a>
                        <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a>
                      
                        <a class="list-group-item active" href="/"><i class="fe-icon-user text-muted"></i>UPDATE PROFILE</a>
                    </nav>
                </div>
            </div>
           
            <div class="col-lg-8 pb-5">
<br/><br/><br/><br/>
<div class="col-md-6">
                        <div class="form-group">
                            <label for="account-user">Price</label>
                            <input class="form-control" type="text" id="account-price"  name="price" value={this.state.price} onChange = {this.handlePriceChange} />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-email">Count</label>
                            <input class="form-control" type="text" id="account-count"  name="count" value={this.state.count} onChange = {this.handleCountChange} />
                        </div>
                    </div>
            
</div>

                
</div>
<div class="col-md-6">
                        <div class="form-group">
                            <label for="account-pincode">Address</label>
                            <input class="form-control" type="text" id="account-pincode" name="pincode" value={this.state.pincode} onChange = {this.handlePincodeChange}/>
                        </div>
</div>
                    <div class="col-12">
                       
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            
                          
                            <button class="btn btn-style-1 btn-primary" onClick={this.onUpdateClick} type="submit" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                        </div>
                        
                   </div>
                   
            </div>
            </div>
          
    )
}
}