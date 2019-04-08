import React from "react";
import img from '../images/carosel-1.png'
import ima from '../images/carosel-3.png'
import pic from '../images/coresel-2.png'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { Button } from 'reactstrap'

class Carousel extends React.Component{
  render() {
  return (
   
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={img} alt="First slide" />
              <MDBMask overlay="black-light" />
            </MDBView>
            {/* // <Button href="/viewmore">View More</Button> */} 
          {/* <MDBCarouselCaption>
           
           <Button style={{float:'right'}} href="/viewbook">View More</Button>
            </MDBCarouselCaption> */}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={ima} alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            {/* <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption> */}
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={pic} alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
           
           <Button style={{float:'right'}} href="/viewbook">View More</Button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          {/* <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </MDBCarouselCaption>
          </MDBCarouselItem> */}
        </MDBCarouselInner>
      </MDBCarousel>
   
  );
}
}

export default Carousel;