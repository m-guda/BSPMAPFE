import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import "./home.css"
import Search from "../search/index";
import Footer from "../footer";
import CondNav from "../condnav";
import LoginNav from "../loginnav";
const HomeLogin = () => {

  return (
   <div> 
      <LoginNav/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="container mt-5">
    <Search/>
    </div>
   <div class="footer">
   <Footer/>
   </div>
   </div>
   
     
  );
};

export default HomeLogin;