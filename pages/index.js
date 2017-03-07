import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

import Layout from '../components/layout'
import Header from '../components/header'
import Banner from '../components/banner'
import Career from '../components/career'
import Skills from '../components/skills'
import Projects from '../components/projects-prev'
import Illustrations from '../components/illu-prev'
import Contact from '../components/contact'

export default class extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (
      <Layout title="Bastien Cailhol - Bienvenue">
        <Header focus="home" />
        <div className="content">
          <Banner />
          <Career />
          <Skills />
          <Projects />
          <Illustrations />
          <Contact />
        </div>
        <style jsx>{`
          .content {
            padding: 45px;
        `}</style>

      </Layout>
    )
  }
}
