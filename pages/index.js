import React from 'react'
import io from 'socket.io-client'

import Login from './login'
import League from './league'

import config from '../config'

// console.log('io  : ', io(config.dev.apiUrl, { path: '/api' }))

export default () => {
  return (
    <div>

      <League />
    </div>
  )
}

// <Login />