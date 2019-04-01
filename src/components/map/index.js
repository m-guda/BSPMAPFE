import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './map.css';
import {Form,Button,} from 'react-bootstrap';

import { FormControl} from 'react-bootstrap';
import { createBrowserHistory as createHistory } from "history";

import NavBar from '../../components/App/navbar/index';


var body;
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];


class LeafletMap extends Component {
  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    
  this.state = {
    fields: {},
    errors: {},
    lati:"",
    longi:"",
    latiVal:"",
    longiVal:"",
   
  };
};

  handleLatChange = event => {
    this.setState({
      latiVal: event.target.value
    });
  }
  handleLongChange = event => {
    this.setState({
      longiVal: event.target.value
    });
  }
   

  handleClick = (e) => {
    this.props.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng 
    });
    this.setState({
    
      lati:e.latlng.lat,
      longi:e.latlng.lng,
  
    });
    console.log("latitude:"+ this.state.lati)
    console.log("longitude:"+ this.state.longi)
  };

  handleChange(e) {
    
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  history = createHistory(this.props);

  submituserRegistrationForm(e) {
    console.log("1");
    e.preventDefault();
    body = {
      username : this.state.fields.username,
      email : this.state.fields.email,
      password:this.state.fields.password,
      phoneno:this.state.fields.phoneno,
      address:this.state.fields.address,
      latitude:this.state.fields.latitude,
      longitude:this.state.fields.longitude
    }
    console.log(body);
    
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["email"] = "";
        fields["phoneno"] = "";
        fields["password"] = "";
        fields["address"]="";
        fields["latitude"]="";
        fields["longitude"]="";
        
  const url = "http://10.10.200.19:9000/users"; 
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', url);
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append( 'GET','POST');
  
  e.preventDefault();
  fetch(url, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify(body) 
  })
.then(console.log(this.state.fields))
.catch(() => console.log("Can’t access " + url + " response. "))
this.props.history.push(`/Login`)
this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Please enter alphabet characters only.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "Please enter valid email-ID.";
      }
    }

    if (!fields["phoneno"]) {
      formIsValid = false;
      errors["phoneno"] = "Please enter your mobile no.";
    }

    if (typeof fields["phoneno"] !== "undefined") {
      if (!fields["phoneno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phoneno"] = "Please enter valid mobile no.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Please enter secure and strong password.";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "Please enter your address.";
    }
    if (!fields["latitude"]) {
      formIsValid = false;
      errors["latitude"] = "Please enter your address.";
    }
    if (!fields["longitude"]) {
      formIsValid = false;
      errors["longitude"] = "Please enter your address.";
    }
   /* if (typeof fields["address"] !== "undefined") {
      if (!fields["address"].match(/^\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/)) {
        formIsValid = false;
        errors["address"] = "Please enter address.";
      }
    }*/
   

    this.setState({
      errors: errors
    });
    return formIsValid;


  }

  
  render() {
    return (
     
      <div >
      <NavBar/>
        <br/><br/><br/><br/> <br/><br/><br/><br/>
        <div class ="container-fluid" style={{width:"1000px",height:"auto"}}>
          <div class="card">
          <div class="card-body px-lg-6 pt-0" >
          <h3 className="my-3"> Register</h3>
          <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
              <div class="md-form">
              <label for="inputIconEx1">Name</label>
              <input type="text" class="form-control" name="username" value={this.state.fields.username} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.username}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx2">Email ID:</label>
              <input type="text"  class="form-control" name="email" value={this.state.fields.emailid} onChange={this.handleChange}  />
              <div className="errorMsg">{this.state.errors.emailid}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx3">Password</label>
              <input type="password" class="form-control" name="password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx4">Confirm Password</label>
              <input type="password" class="form-control" name="Confirmpassword" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx5">Mobile No:</label>
              <input type="text" class="form-control" name="phoneno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
              <div className="errorMsg">{this.state.errors.mobileno}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx6">Address</label>
              <input type="text" class="form-control" name="address" value={this.state.fields.address} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.address}</div>
              </div>
              <div class="md-form">
              <label for="inputIconEx6">Latitude</label>
              <input type="text" class="mr-sm-2" name="latitude" value={this.state.fields.lati} onChange={this.handleLatChange} />
              {/* <div className="errorMsg">{this.state.errors.latiVal}</div> */}
              </div>
              <div class="md-form">
              <label for="inputIconEx6">Longitude</label>
              <input type="text" class="mr-sm-2" name="longitude" value={this.state.fields.longi} onChange={this.handleLongChange} />
              {/* <div className="errorMsg">{this.state.errors.longitude}</div> */}
              </div>      

              <Form className="form" >
          <div >
          <Form inline>
          {/* <FormControl 
              readOnly
            type="text" 
            placeholder="Latitude" 
            className="mr-sm-2"
            value={this.state.lati} 
            onChange={this.handleLatChange}
          />
          
          <FormControl 
          readOnly
            type="text" 
            placeholder="Longitude" 
            className="mr-sm-2"
            value={this.state.longi}  
            onChange={this.handleLongChange}  */}
          />
      <Map>
        ref={this.mapRef}
        center={position} 
        zoom={13} 
        style={{ height: '500px', width: '100%' }}
        onClick={this.handleClick}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          this.props.markers.map((m) => (
            <Marker position={[parseFloat(m.latitude), parseFloat(m.longitude)]}>
              <Popup>latitude:{m.latitude}<br />longitude:{m.longitude}</Popup>
            </Marker>
          ))
        }
      </Map>
      </Form>        

      {/* <Button type="submit" >Submit</Button> */}
      </div>
      </Form>


        
              <button class="btn btn-info btn-block my-4" type="submit" name="button" onClick={this.handleChange}>Register</button>  
              <p>Already Registered?&nbsp;&nbsp;<a href="/login">LOGIN</a></p>
         </form>
      </div>
      </div>
 </div>
          
        
      </div>
    );
  }
}

export default LeafletMap;