import React, { Component } from 'react';
// import ReactDOM  from 'react-dom';
import './App.css';
import icon from './globe-search.svg';
import API from './utils/API';
import CountryCard from './Components/CountryCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      selectedCountry: {},
      filteredCountries: []
    }
  }
  handleChange = e => {
    this.setState({ search: e.target.value });
    this.searchMatches(this.props.list, e.target.value);
  }

  searchMatches = (arr, search) => {
    if (search !== "") {
      this.setState({
        filteredCountries: arr.filter((item) => (
          item.substr(0, search.length).toUpperCase() === search.toUpperCase()
        ))
      });
    } else {
      this.setState({ filteredCountries: [] });
    }
  }
  handleListClick = item => {
    console.log("Selected:", item);
    return this.setState({ search: item, filteredCountries: [] });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    API.getCountry(this.state.search, country => {
      this.setState({
        selectedCountry: country,
        search: "",
        filteredCountries: []
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            SEARCH THE GL<img src={icon} alt="logo" className="titleIcon" />BE
          </h1>
        </header>
        <br />
        <div className="container">
          <div>
            <form autoComplete="off" onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <div className="autocomplete">
                  <input type="text"
                    className="form-control"
                    id="searchbox"
                    placeholder="Start Typing"
                    onChange={this.handleChange}
                    value={this.state.search}
                  />
                  <div className="list-group search-results" aria-labelledby="searchbox">
                    {this.state.filteredCountries.map((item, index) => (
                      <div className="list-group-item align-items-start"
                        key={index}
                        onClick={() => this.handleListClick(item)}
                      >
                        <strong>{item.substr(0, this.state.search.length)}</strong>
                        {item.substr(this.state.search.length)}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              <button id="search-btn" type="submit" className="btn btn-primary">Search</button>
            </form>
            <br />

            <div className="country-info">
              {
                this.state.selectedCountry.name ?
                <CountryCard {...this.state.selectedCountry} /> :
                  <p className="text-center">Please select a country to see its data.</p>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
