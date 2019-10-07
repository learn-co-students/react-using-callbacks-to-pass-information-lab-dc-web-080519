import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickColor = (e) => {
    console.log(e.target)
    e.target.style.backgroundColor = this.props.giveColor()
  }

  render() {
    return (
      <div onClick={this.clickColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
