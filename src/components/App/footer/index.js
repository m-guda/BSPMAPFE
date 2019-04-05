import React from "react";
class Footer extends React.Component {
  render(){
  return (
    <div>
   
   
    <div class="container text-center text-md-left mt-5">

      <div class="row mt-3">

    
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        
          <h6 class="text-uppercase font-weight-bold">Booksplorer</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
          <p>Booksplorer is a one-stop destination for your search for finding the perfect bookstores around you. It helps you set various parameters and lets you find the book of your choice.</p>

        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        
          <h6 class="text-uppercase font-weight-bold">Quick Links</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/aboutus">About us</a>
          </p>
          <p>
            <a href="/reachout">Contact Us</a>
          </p>
         <p>
           <a href="/designed">Team</a>
         </p>
         

        </div>
       
        {/* <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase font-weight-bold">Useful links</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
          <p>
            <a href="#!">Your Account</a>
          </p>
          <p>
            <a href="#!">Become an Affiliate</a>
          </p>
          <p>
            <a href="#!">Shipping Rates</a>
          </p>
          <p>
            <a href="#!">Help</a>
          </p>
        </div>
       */}

      
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      
          <h6 class="text-uppercase font-weight-bold">Contact Us</h6>
          <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
          <p>
            <i class="fas fa-home mr-3"></i> Shaikpet, Hyderabad</p>
          <p>
            <i class="fas fa-envelope mr-3"></i> booksplorer@gmail.co.in</p>
          <p>
            <i class="fas fa-phone mr-3"></i> +91 1234567890</p>

        </div>
       

      </div>
     

    </div>
    </div>
      
     
  );
}
}

export default Footer;