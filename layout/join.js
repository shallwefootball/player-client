import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

import Header from './header'
import { dev } from '../config'
const url = dev.host + '/join'
const ENTER_KEY = 13

export default class LeagueLayout extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })

  }
  handleChangePassword() {

  }
  handleKey() {

  }
  handleButton() {
    console.log('this.state  : ', this.state)

    this._join()
  }

  _join() {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => (res.json()))
    .then(json => {
      console.log("json~ : ", json)
      // this.props.url.replaceTo('/?userId=' + json.userId)
      // location.href = CONST.LOGIN_REDIRECT_PATH
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Panel header="Join">
          <Form ref="form">
            <FormGroup controlId={'email'}>
              <ControlLabel>email</ControlLabel>
              <FormControl
                type="email"
                placeholder="Enter Email"
                onChange={this.handleChangeEmail.bind(this)}
              />
            </FormGroup>
            <FormGroup controlId={'password'}>
              <ControlLabel>password</ControlLabel>
              <FormControl
                type="password"
                placeholder="Enter Password"
                ref="password"
                onChange={this.handleChangePassword.bind(this)}
                onKeyDown={this.handleKey.bind(this)}
              />
            </FormGroup>
            <Button type="button" block onClick={this.handleButton.bind(this)}>선수등록</Button>
          </Form>
        </Panel>
      </div>
    )
  }
}