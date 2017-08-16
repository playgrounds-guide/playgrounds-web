import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import {fetchPlaygrounds} from '../state/playgrounds';
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
  class Map extends Component {
    static defaultProps = {
      center: {lat: 54.350482, lng: 18.570060},
      zoom: 11
    };

    componentWillMount() {
      this.props.fetchPlaygrounds()
    };

    render() {
      const {data} = this.props.playgrounds;

      return (
        <GoogleMapReact
          apiKey={'AIzaSyDNRiwpqNZy8a3zLCN8sdufCgVow2MWzmo'}
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
            lat={54.350482}
            lng={18.570060}
            text={'HOME'}
          />
        </GoogleMapReact>
      );
    }
  }
)