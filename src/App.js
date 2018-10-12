import React, { Component } from 'react';
import './App.css';
import icon from './globe-search.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filteredCountries: [],
      toggle: false,
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleListClick = this.handleListClick.bind(this);
    // this.handleOnLoseFocus = this.handleOnLoseFocus.bind(this);
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

  handleOnLoseFocus = () => {
    if (this.props.list.indexOf(this.state.search) > -1) {
      this.setState({ filteredCountries: [] });
    } else {
      this.setState({ search: "", filteredCountries: [] });
    }
  }

  handleFormSubmit = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
          SEARCH THE GL<img src={icon} alt="logo" className="titleIcon"/>BE
          </h1>
        </header>
        <br />
        <div className="container">
          <div>
            <p>
              If you need to find information about a country you came to the rigth place. Type the name of the country in the search box to get started.
            </p>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <div className="autocomplete">
                  <input type="text"
                    className="form-control"
                    id="searchbox"
                    placeholder="Start Typing"
                    onChange={this.handleChange}
                    onBlur={this.handleOnLoseFocus}
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
              <button id="search-btn" type="submit" class="btn btn-primary">Search</button>
            </form>
            <br />

            <div className="country-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui quas, consequatur doloribus voluptates magni suscipit amet! Nam at, aut quam eveniet voluptatem expedita explicabo nobis ratione deserunt. Voluptas eius quas ut sit autem dolores at voluptates, nobis laboriosam! 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
