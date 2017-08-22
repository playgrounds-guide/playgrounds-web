import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { geolocated } from 'react-geolocated';
import {Tooltip} from 'react-lightweight-tooltip';
import { fetchPlaygrounds } from '../state/playgrounds';
import Home from './Home';
import Marker from './Marker';

export default connect(
  state => ({
    playgrounds: state.playgrounds
  }),
  dispatch => ({
    fetchPlaygrounds: () => dispatch(fetchPlaygrounds())
  })
)(
  geolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 100,
    }
  )(
    class Map extends Component {
      static defaultProps = {
        center: {lat: 54.350482, lng: 18.570060},
        zoom: 11
      };

      componentWillMount() {
        this.props.fetchPlaygrounds()
      };

      render() {
        const { data } = this.props.playgrounds;

        const location = (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled)
          ? this.props.coords
            ? {lat: this.props.coords.latitude, lng: this.props.coords.longitude}
            : null
          : {lat: 54.403351, lng: 18.569951};
        if (location === null) {
          return <div>Pobieram Twoją lokalizację</div>
        }

        return (
          <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyDNRiwpqNZy8a3zLCN8sdufCgVow2MWzmo'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >

            {data !== null && data.map(
              playground => (
                <Marker
                  lat={playground.location.latitude}
                  lng={playground.location.longitude}
                  key={playground.id}
                  alt={playground.name}
                />
              ))}

            <Home
              lat={location.lat}
              lng={location.lng}
            />
          </GoogleMapReact>
        );
      }
    }
  )
)