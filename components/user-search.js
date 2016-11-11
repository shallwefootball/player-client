import React, { Component } from 'react'

import css, {insertRule} from 'next/css'

import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem'

export default class UserSearch extends Component {

  constructor(props) {
    super(props)
  }

  handleChange(e) {
    if(!e.target.value) return
    this.props.actions.getUsersChar(e.target.value)
  }

  handleClickAdd(e) {
    this.props.onAddUser(e.target.value)
  }
  render() {
    return (
      <div>
        <FormGroup controlId="formInlineName">
          <ControlLabel>user 검색</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="이름이 뭔가"
            onChange={this.handleChange.bind(this)}
          />
        </FormGroup>

        <ListGroup>
          {
            this.props.user.users.map(user => {
              return (
                <ListGroupItem key={user.userId}>
                  {user.userName}
                  <Button
                    bsSize="xsmall"
                    onClick={this.handleClickAdd.bind(this)}
                    value={user.userId}
                  >
                    추가
                  </Button>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
      </div>
    )
  }
}


