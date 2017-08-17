import React from 'react';
import Map from './Map';
import {connect} from 'react-redux';


class Geolocation extends React.Component {

  render() {

    const location = (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled)
      ? this.props.coords
        ? {lat: this.props.coords.latitude, lng: this.props.coords.longitude}
        : null
      : {lat: 54.403351, lng: 18.569951};
    if (location === null) {
      return <div>Pobieram Twoją lokalizację</div>
    }

  }
}

export default connect(
  state => ({
    coords: state.geolocation.position
  })
)(Geolocation);