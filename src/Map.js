import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Pin = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {lat: 54.350482, lng: 18.570060},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={'AIzaSyDNRiwpqNZy8a3zLCN8sdufCgVow2MWzmo'}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Pin
          lat={54.350482}
          lng={18.570060}
          text={'HOME'}
        />
      </GoogleMapReact>
    );
  }
}
export default Map;