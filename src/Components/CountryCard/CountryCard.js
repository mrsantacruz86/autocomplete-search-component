import React, { Component } from "react";
import CountryMap from "../Map";
import "./CountryCard.css";

const thousandSep = n => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

class CountryCard extends Component {
  render() {
    let areaKm2 = this.props.area;
    let areaMi2 = (areaKm2 / 2.58999).toFixed(0);
    return (
      <div className="country-card">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
              <img src={this.props.flag} className="card-img-top" alt="flag" />
              <div className="card-body">
                <h2 className="card-title">{this.props.name}</h2>
                <hr />
                <p>
                  <strong>Capital: </strong> {this.props.capital}
                </p>
                <p>
                  <strong>Region: </strong> {this.props.region}
                </p>
                <p>
                  <strong>Subregion: </strong> {this.props.subregion}
                </p>
                <p>
                  <strong>Population: </strong>{" "}
                  {thousandSep(this.props.population)}
                </p>
                <p>
                  <strong>Area: </strong>
                  {thousandSep(areaKm2)} km<sup>2</sup> {"\t"}(
                  {thousandSep(areaMi2)} mi<sup>2</sup>)
                </p>

                <p>
                  <strong>Languages: </strong>
                  {this.props.languages.map(
                    lang => `${lang.name}(${lang.iso639_1}) `
                  )}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {this.props.currencies.map(
                    curr => `${curr.name} (${curr.code}) (${curr.symbol})`
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="card">
              <CountryMap
                lat={this.props.latlng[0]}
                lng={this.props.latlng[1]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CountryCard;
