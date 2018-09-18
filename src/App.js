import React, { Component } from 'react';
import './App.css';
// import ListItem from './Components/ListItem';

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
    this.handleListClick = this.handleListClick.bind(this);
    this.handleOnLoseFocus = this.handleOnLoseFocus.bind(this);
  }
  handleChange(e) {
    this.setState({ search: e.target.value });
    this.searchMatches(this.props.list, e.target.value);
  }
  searchMatches(arr, search){
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
  handleListClick(e) {
    console.log(e.target.text);
    this.setState({ search: e.target.data("country"), filteredCountries: [] });
  }
  handleOnLoseFocus(text) {
    this.setState({ filteredCountries: [] });
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
                    onBlur={this.handleOnLoseFocus}
                    value={this.state.search}
                  />
                  <div className="list-group search-results" aria-labelledby="searchbox">
                    {this.state.filteredCountries.map((item, index) => (
                      <div className="list-group-item align-items-start"
                        key={index}
                        data-item={item}
                        onClick={this.handleListClick}>
                        <strong>{item.substr(0, this.state.search.length)}</strong>
                        {item.substr(this.state.search.length)}
                      </div>
                    ))}
                  </div>

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
