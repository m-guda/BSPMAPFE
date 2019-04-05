 import React from "react";
import "./home.css"
import Search from "../search/index";
import CondNav from "../condnav";
import Carousel from "../carousel";
import Category from "../categories/index";
import Footer from "../footer";
const Homepage = () => {

  return (
   <div> 
     
      <CondNav/><br/><br/><br/><br/>
      
      <div class="container mt-5">
   <Search/>
    </div><br/>
    <div>
  <Carousel/>
    </div><br/>
   <div className="header container" style={{fontSize:'30px'}}>View by Categories</div>
   <div>
     <Category/><br/><br/>
   </div><br/><br/><br/>
   <div>
   
   <Footer/></div>
   </div>
   
     
  );
};

export default Homepage;