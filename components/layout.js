import React from 'react'
import Head from "next/head"
import Footer from "./footer"

export default ({ children, title = 'This is the default title' }) => (
  <div className="layout">
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="/static/styles.css"/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css"/>
      <script src="https://use.fontawesome.com/b3b5ad4973.js"></script>
    </Head>
    <div className="content">{children}</div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `}</style>
  </div>
)