import React from "react";
import NavBar from "../navbar/index";

var body;

class Login extends React.Component {


  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  handleSubmit(event) {

    
    body = {
      username: this.state.username,
      passwordHash: this.state.password,
    }
    console.log(body)
    console.log(body.passwordHash)
    console.log(body.username)
    const url = "http://10.10.200.19:9000/users/login";
    console.log(url)
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

      localStorage.setItem("AccessToken",contents.accessToken)
      
      this.props.history.push('/homelogin')
     // (this.props.history.push('/mh')):(this.props.history.push('/lh')))
      //((localStorage.getItem("AccessToken") == null )?(console.log(this.props.history),
    //this.props.history.push('/loggedin')):(this.props.history.push('/')))
 })
 .catch(()=> console.log("can't access " + url))
 
  }



  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5;
  }

  handlePasswordChange (event) {
    this.setState({password: event.target.value});
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value})
  }



onRegisterClick(){
    console.log(this.props.values)
    
    this.props.history.push('/register')
}

 render(){

  return (
    <div>
      <NavBar/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <div class ="container-fluid" style={{width:"600px",height:"1000px"}}>
      <div class="card">
        <div class="card-body px-lg-6 pt-0" >
        <h3 className="my-3"> Login</h3>
   <div class="md-form">
   <label for="inputIconEx1">Username</label>
   <input type="text" id="inputIconEx1" class="form-control" name="username" placeholder="Enter your username"  onChange = {this.handleUserChange}/>
   </div>
   <div class="md-form">
   <label for="inputIconEx2">Password</label>
   <input type="password" id="inputIconEx2" class="form-control" name="passwordHash" placeholder="Enter your password" onChange={this.handlePasswordChange}/>
   </div>
   <br/>
   <div class="form-check">
         <input type="checkbox" class="form-check-input" id="materialLoginFormRemember"/>
         <label class="form-check-label" for="materialLoginFormRemember">Remember me &nbsp;&nbsp;&nbsp;<a href="">Forgot password?</a></label>
    </div>
 <button class="btn btn-info btn-block my-4" onClick={this.handleSubmit} type="submit">Sign in</button>   
  <p>Not a member?&nbsp;&nbsp;<a href="/register">Register</a></p> 
   
    </div>
    </div></div>
    </div>
  );
}

 }
  

export default Login;