 import React from "react";
import "./home.css"
import Search from "../search/index";
import CondNav from "../condnav";
import Carousel from "../carousel";
import Category from "../categories/index";
const Homepage = () => {

  return (
   <div> 
     
      <CondNav/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <div class="container mt-5">
   <Search/>
    </div><br/><br/><br/>
    <div>
  <Carousel/>
    </div><br/>
   <div className="header container" style={{fontSize:'30px'}}>Search by Categories</div>
   <div>
     <Category/>
   </div>
   </div>
   
     
  );
};

export default Homepage;