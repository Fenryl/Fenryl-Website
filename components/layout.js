import React from 'react'
import Head from "next/head"
import Header from "./header"

const Layout = ({children}) => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/styles.css"/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css"/>
      <script src="https://use.fontawesome.com/b3b5ad4973.js"></script>
    </Head>
    <Header />
    {children}
  </div>
)

export default Layout
