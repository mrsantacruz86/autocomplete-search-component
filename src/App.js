import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import textfilter from './utils/textFilter';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filteredCountries: [],
      country: "",
      toggle: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectFromList = this.handleSelectFromList.bind(this);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
    console.log(e.target.value);
    console.log(this.state.search);
    this.searchMatches(this.props.list, e.target.value);
  }

  handleDropdown = (e) => {
    document.getElementById("searchbox").dropdown();
  }

  searchMatches = (arr, search) => {
    this.setState({
      filteredCountries: arr.filter((item) => (
        item.substr(0, search.length).toUpperCase() === search.toUpperCase()
      ))
    });
  }

  handleSelectFromList = (e) => {
    this.setState({ search: e.target.text, filteredCountries: [] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <div className="container">
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <div className="dropdown">
                  <input type="text"
                    className="form-control"
                    id="searchbox"
                    placeholder="Start Typing"
                    onChange={this.handleChange}
                    // onFocus={this.handleDropdown}
                    value={this.state.search}
                    data-toggle="dropdown"
                  />

                  <div class="dropdown-menu" aria-labelledby="searchbox">
                    {this.state.filteredCountries.map(item => (
                      <a class="dropdown-item" onClick={this.handleSelectFromList}>
                        {item}
                      </a>
                    ))}
                  </div>

                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
