import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      colorSelected: null
    }
  }

  setColor = (colorHex) => {
    this.setState({
      colorSelected: colorHex
    }, () => console.log(this.state.colorSelected))
  }

  giveColor = () => {
    return this.state.colorSelected
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell giveColor={this.giveColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
