import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  position: 'absolute',
  top: '18px',
  left: '0px',
  width: '47.5%', // 47.5
  height: '85%',
  margin: '0',
  padding: '0'
};

const defaultCenter = {
  lat: 41.04137, lng: 28.979530
}

export class MapContainer extends React.Component<MapProps> {

 render() {
  return (
    <Map
        style={mapStyles}
        google={this.props.google}
        centerAroundCurrentLocation={true}
        zoom={12}
        initialCenter={defaultCenter}
    />
  );
 }
}

export default GoogleApiWrapper({
  apiKey: (0)
})(MapContainer)
