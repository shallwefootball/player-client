import React, { Component } from 'react'

import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'


export default class SubCounts extends Component {

  constructor(props) {
    super(props)
    this.state = {
      subCount: props.subCount
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subCount: nextProps.subCount
    })
  }

  handleChange(e) {
    this.setState({
      subCount: e.target.value
    })

    this.props.onChangeSubCount(e.target.value)
  }
  render() {
    const { subCount } = this.state
    return (
      <FormGroup>
        <ControlLabel>후보 명수</ControlLabel>
        <FormControl
          componentClass="select"
          placeholder="select"
          onChange={this.handleChange.bind(this)}
          value={subCount}
        >
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </FormControl>
      </FormGroup>
    )
  }
}