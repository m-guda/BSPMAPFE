import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

class Carousel extends React.Component{
  render() {
  return (
      <div className="w-50 text-center mx-auto p-3 mt-2" container>
   
   
      <MDBCarousel activeItem={1} length={1} style={{width:'1100px'}} showControls={false} showIndicators={false} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="http://bestanimations.com/Books/finger-passes-along-book-spines-library-animated-gif.gif
" />
              <MDBMask overlay="black-light" />
            </MDBView>
            {/* <MDBCarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </MDBCarouselCaption> */}
          </MDBCarouselItem>
          {/* <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="data:image/jpeg;base64,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" alt="Second slide" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
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
   
    </div>
  );
}
}

export default Carousel;