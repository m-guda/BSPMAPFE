import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBRow } from 'mdbreact';
import CondNav from "../condnav";
import { Collapse, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import "../../map/map.css";
import MdCall from 'react-ionicons/lib/MdCall'
import IosContactOutline from 'react-ionicons/lib/IosContact';
var id;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];

class Viewmore extends React.Component{

    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
         this.state = {
         title:'',
         author:'',
         price:'',
         count:'',
         category:'',
         description:'',
         imgurls:[],
         latitude: '',
         longitude: '',  
        username:'',
        phoneno:'',
    address:'',      }
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
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
                                count:contents.count,
                                category:contents.category,
                                description:contents.description,
                                imgurls : contents.imageUrls,
                                latitude: contents.user.latitude,
                                longitude: contents.user.longitude,
                                address:contents.user.address,
                                username:contents.user.username,
                                phoneno:contents.user.phoneno
                            })   
                          
                        }
                          
                                 
                })
        //.catch(() => console.log("Can’t access " + url + " response. "))
        // console.log(this.state.latitude)
      
    }
    setMarker = ({ latitude, longitude }) => {
        this.setState({
            markers: [...this.state.markers, {
                latitude,
                longitude
            }]
        })
    }
   
    render(){


         
       

        return (
            
            <div style={{backgroundImage: "url(" + "https://wallpapermemory.com/uploads/407/book-wallpaper-hd-1440x900-128900.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            }}>
            >
                
                     
                          <CondNav/><br></br><br></br>
                           <div > {
                             
                                    <center><br></br>
                                <MDBCard style={{ minWidth: "10em",maxWidth:"50em" ,minHeight: "40em",maxHeight:"auto",background: "white",flex:1 }} >
                               
                                <MDBCardBody className="text-black">
                                    <MDBCardTitle><span>{this.state.name}</span><br></br></MDBCardTitle>
                                    <MDBCardImage className="img-fluid" src={this.state.imgurls} height="200" width="400"/>    
                                   {/* <Carousel>
                                    {this.state.imgurls.map(function(img, j){return <img className="imgurl" key={j} src={img}/>})}
                                    </Carousel>*/}
                                    <div style={{marginTop:"2em"}}>
                                    <h5>
                                            <span className="details" >Title&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.title}</span><br></br> 
                                            {/* <span className="details" >Title&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.user.username}</span><br></br>  */}
                                            <span className="details" >Price&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.price}</span><br></br>  
                                            <span className="details" >Category&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.category}</span><br></br>
                                            <span className="details"> Copies &nbsp;&nbsp;:&nbsp;&nbsp;{this.state.count}</span><br></br><br/>
                                            <center><h4>User Details</h4></center>
                                            <span className="details" ><IosContactOutline/>&nbsp;&nbsp;User Name&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.username}</span><br></br>
                                            <span className="details" ><MdCall/>&nbsp;&nbsp;Contact Us&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.phoneno}</span><br></br> <br/>
                                           
                                            <span className="details" >Description&nbsp;&nbsp;:&nbsp;&nbsp;{this.state.description}</span><br></br> 
                                            
                                           
                                    
                                    </h5>
                                    
                                    </div>
                                    <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Locate Book</Button>
        <Collapse isOpen={this.state.collapse}>
        <Map
                                                ref={this.mapRef}
                                                center={position}
                                                zoom={13}
                                                style={{ height: '350px', width: '100%' }}
                                            >

                                                <TileLayer
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                                />



                                                <Marker position={[this.state.latitude, this.state.longitude]}>
                                                <Popup minWidth={"200"} closeButton={true} minHeight={10}>
                                 
                                                    <div>
                                                    <b>{this.state.username}</b><br></br>
                                                
                                                    {this.state.address}
                                                    
                                                    </div>
                                                </Popup>
                                                </Marker>
                                            </Map>
        </Collapse>
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





