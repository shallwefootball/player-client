import React, { Component } from 'react'

import Link from 'next/link'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'


import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

import Header from '../layout/header'

import CONST from '../constraint'
import config from '../config'
const url = config.dev.apiUrl + '/login'
const ENTER_KEY = 13

const head = (
  <p>선수 로그인</p>
)

export default class Login extends Component {

  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  _login() {

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => (res.json()))
    .then(json => {
      this.props.url.replaceTo('/?userId=' + json.userId)
      // location.href = CONST.LOGIN_REDIRECT_PATH
    })
  }

  handleButton() {

    this._login()
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleKey(e) {
    if(e.keyCode === ENTER_KEY) {
      this._login()
    }
  }

  render() {

    return (
      <Grid>
        <Header />
        <Panel header={head}>
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
            <Button type="button" block onClick={this.handleButton.bind(this)}>로그인</Button>
          </Form>
        </Panel>
      </Grid>
    )
  }
}