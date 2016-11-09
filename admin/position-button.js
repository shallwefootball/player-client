import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class PositionButton extends Component {

  handleChange(e) {
    this.props.onChangePosition(e.target.value)
  }
  render() {

    return (

      <FormGroup>
        <FormControl
          componentClass="select"
          placeholder="select"
          onChange={this.handleChange.bind(this)}
          value={this.props.matchPosition}
        >
          <option value="GK">GK</option>
          <option value="DF">DF</option>
          <option value="MF">MF</option>
          <option value="FW">FW</option>
        </FormControl>
      </FormGroup>
    )
  }
}