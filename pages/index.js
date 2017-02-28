import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Banner from '../components/banner'
import Career from '../components/career'
import Layout from '../components/layout'
import Skills from '../components/skills'
import Projects from '../components/projects-prev'
import Illustrations from '../components/illu-prev'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <Layout title="Bastien Cailhol - Bienvenue">
        <Banner />

        <i className="material-icons">face</i>
        <i className="fa fa-camera-retro"></i>
        <i className="devicon-amazonwebservices-original"></i>
        <Career />
        <Skills />
        <Projects />
        <Illustrations />
        <div>
        </div>

      </Layout>
    )
  }
}
