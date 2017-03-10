import React from 'react'
import Router from 'next/router'

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Modal from '../components/modal'

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: [
        {name: 'bobby.jpg', type: 'illu'},
        {name: 'appart.jpg', type: 'dessin'},
        {name: 'danseuse.jpg', type: 'illu'},
        {name: 'candy_hero.png', type: 'pixel'}
      ]
    }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  // handling escape close
  componentDidMount () {
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onKeyDown)
  }

  onKeyDown (e) {
    if (!this.props.url.query.photoId) return
    if (e.keyCode === 27) {
      this.props.url.back()
    }
  }

  dismissModal () {
    Router.push('/2d')
  }

  showPhoto (e, id) {
    e.preventDefault()
    Router.push(`/2d/?photoId=${id}`, `2d/photo?id=${id}`)
  }

  render () {
    const { url, photos } = this.props
    console.log(photos)

    return (
      <Layout title='2D'>
        <Header focus='2d' />
        <div className='list pageContent'>
          {
            url.query.photoId &&
            <Modal
              id={url.query.photoId}
              onDismiss={() => this.dismissModal()}
            />
          }
          {
            photos.map((elem, i) => (
              <div key={i} className='photo'>
                <a
                  className='photoLink'
                  href={`/2d/photo?id=${i}`}
                  onClick={(event) => this.showPhoto(event, i)}
                >
                  {elem.name}
                </a>
              </div>
            ))
          }
        </div>
        <Footer />
        <style jsx>{`
              .list {
                padding: 45px;
                text-align: center;
              }

              .photo {
                display: inline-block;
              }

              .photoLink {
                color: #333;
                vertical-align: middle;
                cursor: pointer;
                background: #eee;
                display: inline-block;
                width: 250px;
                height: 250px;
                line-height: 250px;
                margin: 10px;
                border: 2px solid transparent;
              }

              .photoLink:hover {
                border-color: blue;
              }
            `}</style>
      </Layout>
    )
  }
}
