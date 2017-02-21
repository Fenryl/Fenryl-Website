import Document, { Head, Main, NextScript } from 'next/document'

import Header from '../components/header'

export default class MyDocument extends Document {

  render () {
    return (
     <html>
       <Head>
         <link rel="stylesheet" href="/static/styles.css" />
       </Head>
       <body>
         <Header />
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}