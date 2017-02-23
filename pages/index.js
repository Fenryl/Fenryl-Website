import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Banner from '../components/banner'
import Career from '../components/career'
import Skills from '../components/skills'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div>
        <Head>
          <title>Développement</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Banner />

        <i className="material-icons">face</i>
        <i className="fa fa-camera-retro"></i>
        <i className="devicon-amazonwebservices-original"></i>
        <Career />
        <Skills />
        <div>
        </div>

      </div>
    )
  }
}
