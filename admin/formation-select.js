import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

export default class FormationSelect extends Component {

  handleChange(e) {
    this.props.onChangeFormation(e.target.value)
  }

  render() {
    return (
      <FormGroup controlId="formControlsSelect">
      <ControlLabel>포메이션</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          onChange={this.handleChange.bind(this)}
          value={this.props.formation}
        >
          <option value="3-3-4">3-3-4</option>
          <option value="3-4-3">3-4-3</option>
          <option value="3-5-2">3-5-2</option>
          <option value="3-6-1">3-6-1</option>
          <option value="4-2-4">4-2-4</option>
          <option value="4-3-3">4-3-3</option>
          <option value="4-4-2">4-4-2</option>
          <option value="4-5-1">4-5-1</option>
          <option value="5-2-3">5-2-3</option>
          <option value="5-3-2">5-3-2</option>
          <option value="5-4-1">5-4-1</option>
          <option value="6-2-2">6-2-2</option>
        </FormControl>
      </FormGroup>
    )
  }
}