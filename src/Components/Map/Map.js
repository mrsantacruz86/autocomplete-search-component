import React, { Component } from "react";

class CountryMap extends Component {
  componentDidMount() {
    const google = window.google;
    new google.maps.Map(this.refs.map, {
      zoom: 5,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div ref="map" style={{ height: "400px", width: "100%" }} />
    );
  }
}

export default CountryMap;
