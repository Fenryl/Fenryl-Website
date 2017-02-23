import React from 'react'

import Link from 'next/link'

export default class Header extends React.Component {
  

  render () {
    return (
      <div className="header">
          <h1 className="title">Bastien Cailhol</h1>
          <nav className="menu">
              <ul>
                <li><Link prefetch href='/index'><a>Home</a></Link></li>
                <li><Link prefetch href='/dev'><a>Dev</a></Link></li>
                <li><Link prefetch href='/2d'><a>2D</a></Link></li>
                <li><Link prefetch href='/3d'><a>3D</a></Link></li>
                <li><Link prefetch href='/contact'><a>Contact</a></Link></li>
                </ul>
          </nav>
          <style jsx>{`
            .header {
                display: flex;
                align-items: baseline;
            }

            .menu li {
                display: inline-block;
                margin: 0 10px;
            }
        `}</style>
      </div>
    )
  }
}
