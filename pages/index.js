import React from 'react'
import Head from 'next/head'
import io from 'socket.io-client'

import Login from './login'

import config from '../config'

// console.log('io  : ', io(config.dev.apiUrl, { path: '/api' }))

export default () => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>공찰래리그 :: 내일뭐해. 공찰래?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel='stylesheet' href='https://bootswatch.com/paper/bootstrap.min.css' />
      </Head>

      <Login />
    </div>
  )
}