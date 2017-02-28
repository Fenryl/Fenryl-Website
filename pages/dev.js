import React from 'react'
import Router from 'next/router'

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
      <Layout title="Développement">
        <div>
        </div>
      </Layout>
    )
  }
}
