import React from 'react'
import Router from 'next/router'
import Head from 'next/head'


export default class extends React.Component {
  static getInitialProps () {
    return {
    }
  }

  constructor (props) {
    super(props)
  }


  render () {

    return (
      <div>
        <Head>
          <title>Développement</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
        </div>
      </div>
    )
  }
}
