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

  searchMatches = (arr, search) => {
    if (search != "") {
      this.setState({
        filteredCountries: arr.filter((item) => (
          item.substr(0, search.length).toUpperCase() === search.toUpperCase()
        ))
      });
    } else {
      this.setState({ filteredCountries: [] });
    }

  }

  handleSelectFromList = (e) => {
    this.setState({ search: e.target.text, filteredCountries: [] });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sample autocomplete search</h1>
        </header>
        <br />
        <div className="container">
          <div>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Country</label>
                <div className="autocomplete">
                  <input type="text"
                    className="form-control"
                    id="searchbox"
                    placeholder="Start Typing"
                    onChange={this.handleChange}
                    value={this.state.search}
                  />

                  <ul className="list-group search-results" aria-labelledby="searchbox">
                    {this.state.filteredCountries.map((item, index) => (
                      <li class="list-group-item list-group-item-action align-items-start" key={`c-${index}`} onClick={this.handleSelectFromList}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            </form>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui quas, consequatur doloribus voluptates magni suscipit amet! Nam at, aut quam eveniet voluptatem expedita explicabo nobis ratione deserunt. Voluptas eius quas ut sit autem dolores at voluptates, nobis laboriosam! Possimus minima praesentium minus deleniti non, odio ad officia corporis, impedit facilis temporibus sapiente. Deserunt, odio? Est praesentium aliquid assumenda, ex accusantium neque, quia placeat, dignissimos temporibus consequatur doloremque labore quibusdam obcaecati consequuntur eveniet quam id necessitatibus fugiat fugit tempora rem? Eaque atque maxime quos porro quam molestias iusto id similique deleniti exercitationem laboriosam hic rem, eveniet voluptatum eius necessitatibus perspiciatis?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
