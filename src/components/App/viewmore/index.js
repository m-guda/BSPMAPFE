import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import CondNav from "../condnav";
var id;
class Viewmore extends React.Component{

    constructor(props){
        super(props)
         this.state = {
         title:'',
         author:'',
         price:'',
         category:'',
         description:'',
         imgurls:[],
        }
    }
    
    componentDidMount(props){
         id=this.props.location.state.id;
        console.log("componentDidMount in book id:"+id);

        const url = "http://10.10.200.19:9000/books/"+id; 
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    
        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');
    
        headers.append('GET', 'POST');
        
    
        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
                        if(contents.imageUrls!=null)
                        {
                            this.setState ({
                                title:contents.title,
                                price:contents.price,
                                author:contents.author,
                                category:contents.category,
                                description:contents.description,
                                imgurls : contents.imageUrls
                            })   
                          
                        }
                          
                                 
                })
        //.catch(() => console.log("Can’t access " + url + " response. "))
      
      
    }

   
    render(){


         
       

        return (
            <div>
                     
                          <CondNav/><br></br>
                           <div > {
                             
                                    <center>
                                <MDBCard style={{ minWidth: "10em",maxWidth:"50em" ,minHeight: "40em",maxHeight:"auto",background: "white",flex:1 }} >
                               
                                <MDBCardBody className="text-black">
                                    <MDBCardTitle><span>{this.state.name}</span><br></br></MDBCardTitle>
                                    <MDBCardImage className="img-fluid" src={this.state.imgurls}/>    
                                   {/* <Carousel>
                                    {this.state.imgurls.map(function(img, j){return <img className="imgurl" key={j} src={img}/>})}
                                    </Carousel>*/}
                                    <div style={{marginTop:"2em"}}>
                                    <h5>
                                            <span className="details" >Title&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.title}</span><br></br> 
                                            {/* <span className="details" >Title&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.user.username}</span><br></br>  */}
                                            <span className="details" >Price&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.price}</span><br></br>  
                                            <span className="details" >category&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.category}</span><br></br>  
                                            <span className="details" >Description&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.description}</span><br></br> 
                                            
                                    
                                    </h5>
                                    
                                    </div>
                                    </MDBCardBody>
                                </MDBCard>
                                
                            
                                </center>
                               
                           }
                                </div>



                        
            </div>
        )
    }
}
export default Viewmore;





