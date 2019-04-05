import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import IosCall from 'react-ionicons/lib/IosCall'
import IosContact from 'react-ionicons/lib/IosContact'
import IosCopy from 'react-ionicons/lib/IosCopy'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
const position = [17.440081, 78.348915];
class Maprender extends Component {

  handleClick = (e) => {
    this.props.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng 
    });
  };

  
  render() {
    return (
      <Map
        ref={this.mapRef}
        center={position} 
        zoom={13} 
        style={{ height: '800px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          this.props.data.map((data) => (
            <Marker position={[parseFloat(data.user.latitude), parseFloat(data.user.longitude)]}>
              <Popup><IosContact/>Username:{data.user.username}<br /><IosCall/>Contact:{data.user.phoneno} <br/> <IosCopy/>Copies:{data.count}</Popup>
            </Marker>
          ))
        }
      </Map>
    );
  }
}

export default Maprender;