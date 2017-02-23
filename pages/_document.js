import Document, { Head, Main, NextScript } from 'next/document'

import Header from '../components/header'

export default class MyDocument extends Document {

  render () {
    return (
     <html>
       <Head>
         <link rel="stylesheet" href="/static/styles.css" />
         <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
         <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
         <script src="https://use.fontawesome.com/b3b5ad4973.js"></script>
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