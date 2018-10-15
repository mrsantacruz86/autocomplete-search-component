import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class CountryMap extends Component {

  render() {
    let center = {
      lat: this.props.lat,
      lng: this.props.lng
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px' , width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB4wbNsCXGWAnl77rR9Rj_7X5Lt7AuGJEI" }}
          defaultCenter={center}
          defaultZoom={3}
        />
      </div>
    );
  }
}

export default CountryMap;