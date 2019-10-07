import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} id={str} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  handleClick = (e) => {
    if (e.target.id !== 'colorSelector'){
    this.props.changeColor(e.target.id)
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
