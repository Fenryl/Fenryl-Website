import React from 'react'
import Head from 'next/head'
import Footer from './footer'

export default ({ children, title = 'This is the default title' }) => (
  <div className='layout'>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='/static/styles.css' />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:400,700" rel="stylesheet" />
    </Head>
    <div className='content'>{children}</div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    `}</style>
  </div>
)
