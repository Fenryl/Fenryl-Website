import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Banner from '../components/banner'
import Career from '../components/career'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Projects from '../components/projects'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <Layout>
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
        <Projects />
        <div>
        </div>

      </Layout>
    )
  }
}
