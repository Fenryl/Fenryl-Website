import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Layout from '../components/layout'

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
      <Layout>
        <Head>
          <title>Développement</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div>
        </div>
      </Layout>
    )
  }
}
