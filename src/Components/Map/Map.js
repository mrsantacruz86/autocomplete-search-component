import React, { Component } from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class CountryMap extends Component {

  render() {
    const position = [this.props.lat, this.props.lng];
    return (
      <div id="map-frame">

      </div>
    );
  }
}

export default CountryMap;