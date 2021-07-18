import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const style = {
  position: 'relative',
  top: '54px',
  width: '47.5%', // 47.5
  height: '85%',
};


const defaultCenter = {
  lat: 41.04137, lng: 28.979530
}

export class MapContainer extends React.Component<MapProps> {

 render() {
  return (
    <Map
        style = {style}
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
