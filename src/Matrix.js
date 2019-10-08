import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {selectedColor: null}
  }

  selectColor = (hexColor) => {this.setState({selectedColor: hexColor})}

  getSelected = () => {return this.state.selectedColor}

  genRow = (vals) => (
    vals.map((val, idx) => <Cell selected={this.getSelected} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    // console.log(this.getSelected())
    return (
      <div id="app">
        <ColorSelector selector={this.selectColor} />
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
