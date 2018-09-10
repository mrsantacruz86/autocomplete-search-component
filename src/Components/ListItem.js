import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(text){
    this.props.onClick(text);
  }
  render(){
    return (
      <div className="list-group-item list-group-item-action align-items-start"
        onClick={this.handleOnClick(this.props.text)}>
        <strong>{this.props.text.substr(0, this.props.ind)}</strong>
        {this.props.text.substr(this.props.ind)}
      </div>
    );
  }
}


export default ListItem;