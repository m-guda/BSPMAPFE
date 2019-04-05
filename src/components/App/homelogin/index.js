import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import "./home.css"
import Search from "../search/index";
import Footer from "../footer";
import CondNav from "../condnav";
import LoginNav from "../loginnav";
//import Carousel from '../carousel /index';
import Carousel from '../carousel/index';
import Category from "../categories/index";
const HomeLogin = () => {

  return (
   <div> 
      <LoginNav/><br/><br/><br/><br/>
      <div class="container mt-5">
    <Search/>
    </div><br/>
    <div>
  <Carousel/>
    </div><br/>
   <div className="header container" style={{fontSize:'30px'}}>Search by Categories</div>
   <div>
     <Category/><br/><br/><br/><br/><br/><br/>
   </div><br/><br/><br/><br/>
   <div>
   <Footer/>
   </div> 
   </div>
   
     
  );
};

export default HomeLogin;