import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
var body;

export default class UpdateProfile extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            email: "",
            address: "",
            phoneno:"",
            pincode:"",
            show: false,
           
          }
      
  
       // this.handleChange = this.handleChange.bind(this);
        //this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
       this.handlePhoneChange = this.handlePhoneChange.bind(this);
       this.handlePincodeChange = this.handlePincodeChange.bind(this);
        this.onUpdateClick = this.onUpdateClick.bind(this);  
        
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
      };
      onUpdateClick(event) {

        console.log(this.state.username);
          
          let body = {
            username : this.state.username,
            email: this.state.email,
            address:this.state.address,
            phoneno:this.state.phoneno,
            pincode:this.state.pincode,
          }
          console.log(body)
          console.log(body.username)
          console.log(body.email)
          console.log(body.phoneno)
          console.log(this.state.address);
          console.log(body.pincode);
          const url = "http://10.10.200.19:9000/users/update";
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
        const url = "http://10.10.200.19:9000/users/me"; 
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
    this.setState({ username : contents.username,
    email : contents.email,
    password:contents.password,
    phoneno:contents.phoneno,
    address:contents.address,
    pincode:contents.pincode,
})
console.log('view details'+this.state)
})

  //.then(console.log(this.state.fields))
  .catch(() => console.log("Can’t access " + url + " response. "))
  //this.props.history.push(`/Login`)
  //this.setState({fields});
         // alert("Form submitted");
    }
    handleUserChange(event) {
        this.setState({ username: event.target.value})
        console.log("Username: " + this.state.username)
        // fields.uname= event.target.value
        // console.log("Username: " + fields.uname)
      }
     
    
      handleEmailChange(event) {
        this.setState({ email: event.target.value})
        console.log("email: " + this.state.email)
        // fields.uname= event.target.value
        // console.log("Username: " + fields.uname)
      }
      handleAddressChange(event) {
        this.setState({ address: event.target.value})
        console.log("Username: " + this.state.address)
       // this.setState({ address: event.target.value})
        // fields.uname= event.target.value
        // console.log("Username: " + fields.uname)
      }
      handlePincodeChange(event) {
        console.log("pincode" + event.target.value)
        this.setState({ pincode: event.target.value})
      }
      handlePhoneChange(event) {
        console.log("phoneno" + event.target.value)
        this.setState({ phoneno: event.target.value})
      }
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
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
                           <br/> {this.state.username}{console.log(this.state)}
                           
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
                       {/* <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">Update Profile</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
    </a>*/}
                        <a class="list-group-item active" href="/"><i class="fe-icon-user text-muted"></i>UPDATE PROFILE</a>
                    </nav>
                </div>
            </div>
           
            <div class="col-lg-8 pb-5">
<br/><br/><br/><br/>
<div class="col-md-6">
                        <div class="form-group">
                            <label for="account-user">Username</label>
                            <input class="form-control" type="text" id="account-user"  name="username" value={this.state.username} onChange = {this.handleUserChange} disabled />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-email">E-mail Address</label>
                            <input class="form-control" type="email" id="account-email"  name="email" value={this.state.email} onChange = {this.handleEmailChange} disabled/>
                        </div>
                    </div>
            <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-phone">Phone Number</label>
                            <input class="form-control" type="text" id="account-phone" name="phoneno" value={this.state.phoneno}  onChange = {this.handlePhoneChange} />
                        </div>
</div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-address">Address</label>
                            <input class="form-control" type="text" id="account-addresss" name="address" value={this.state.address} onChange = {this.handleAddressChange}/>
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
        </div>
    
       </div>
    );
  }
}