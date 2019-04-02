import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
let id;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];
class MapLocate extends Component {

  constructor(props){
    super(props)
     this.state = {
        lat: "",
        long: ""
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
                    
                        // this.setState ({
                        //    lat: contents.user.latitude,
                        //    long: contents.user.longitude
                        // })   
                      
                        this.state.lat = contents.user.latitude;
                        this.state.long = contents.user.longitude

                    console.log("heyyyyy   " + this.state.lat);
                    console.log("heyyyyy   " + this.state.long);

                      
                             
            })
    .catch(() => console.log("Can’t access " + url + " response. "))

}

  handleClick = (e) => {
    this.props.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng 
    });
  };

  
  render() {
    {console.log("sevfhjvweifvweifvweifvefwqifbwfviufb");}
    return (

      <Map
        ref={this.mapRef}
        center={position} 
        zoom={13} 
        style={{ height: '800px', width: '100%' }}
      > {console.log("vschdvsvqwcvqwiycvqi")}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          
         
           
            <Marker position={[parseFloat(this.state.lat), parseFloat(this.state.long)]}>
              <Popup>latitude:{this.state.lat}<br />longitude:{this.state.long} <br/> </Popup>
            </Marker>
          
        }
      </Map>
    );
  }
}

export default MapLocate;