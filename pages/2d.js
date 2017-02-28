import React from 'react'
import Router from 'next/router'
import Link from 'next/link'

import Layout from '../components/layout'
import Modal from '../components/modal'

export default class extends React.Component {
  static getInitialProps () {
    return {
      photos: new Array(15).fill(0).map((v, k) => k + 1)
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

    return (
      <Layout title="2D">
        <div>
          <div className='list'>
            {
              url.query.photoId &&
                <Modal
                  id={url.query.photoId}
                  onDismiss={() => this.dismissModal()}
                />
            }
            {
              photos.map((id) => (
                <div key={id} className='photo'>
                  <a
                    className='photoLink'
                    href={`/2d/photo?id=${id}`}
                    onClick={(e) => this.showPhoto(e, id)}
                  >
                    {id}
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <style jsx>{`
              .list {
                padding: 50px;
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
