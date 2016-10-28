import React from 'react'

import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'

import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'


import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'


import config from '../config'

console.log('confg  : ', config)

const url = config.dev.apiUrl + '/login'

console.log('url   : ', url);


const head = (
  <p>선수 로그인</p>
)

export default () => {
  return (
    <Grid>
      <Panel header={head}>
        <Form action={url} method="post">
          <FormGroup controlId={'email'}>
            <ControlLabel>email</ControlLabel>
            <FormControl type="email" placeholder="Enter Email" name="email"/>
          </FormGroup>
          <FormGroup controlId={'password'}>
            <ControlLabel>password</ControlLabel>
            <FormControl type="password" placeholder="Enter Password" name="password"/>
          </FormGroup>
          <Button type="submit" block>로그인</Button>
        </Form>
      </Panel>
    </Grid>
  )
}