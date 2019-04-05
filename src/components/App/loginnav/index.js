import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import IosContactOutline from 'react-ionicons/lib/IosContact';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
var body;
class LoginNav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
Logout() {
  body = { token: localStorage.getItem("AccessToken") }
  console.log(localStorage.getItem("AccessToken"))
        let token = localStorage.getItem("AccessToken");
  const url = "http://10.10.200.19:9000/users/signout";
  console.log(url)
  console.log(token);
  const AuthStr = 'Bearer '.concat(token);     
  let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

          headers.append('Authorization', AuthStr);
          console.log("Access Token"+AuthStr);

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('PUT', 'GET');
        console.log("1")  
        console.log(JSON.stringify(body))
        fetch(url, {
            headers: headers,
            method: 'PUT',
            body :JSON.stringify(body)
        })
       localStorage.removeItem("AccessToken")
       this.props.history.push('/')
      
        .then(response =>{ })
        .then(contents => {     })
         .catch(() => console.log("Can’t access " + url + " response. "))          
}

render() {
  return (
    <div class="container">
      <div class="row">
          <Navbar color="dark" fixed="top" dark expand="md" scrolling dark>
          <div class="col">
          <NavbarBrand href="/" style={{ fontSize : "30px"}}>Booksplorer</NavbarBrand>
          </div>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto">
          {/* <NavItem> <Search/></NavItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
         
          <NavItem>
         
          <NavbarBrand href="/aboutus" >About Us</NavbarBrand>
          <NavbarBrand href="/viewbook" >ViewBook</NavbarBrand>
          
          {/* <NavbarBrand href="/reachout" >Reach Out!</NavbarBrand> */}
          <NavbarBrand href="/sellbook" >Sell A Book</NavbarBrand>
          </NavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
               <IosContactOutline color='white' style={{size:'100'}}/>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="/profile">View Profile</MDBDropdownItem>
                {/* <MDBDropdownItem href="#!">View Orders</MDBDropdownItem> */}
                <MDBDropdownItem href="/" onClick={this.Logout}>Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
        
          </MDBNavItem>
          </Nav>    
          </Collapse>
         
          </Navbar>
          </div>
          </div>
    );
  }
}

export default LoginNav;