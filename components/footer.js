import React from 'react'

import Link from 'next/link'

import Icon from './icon'

export default () => (
    <div className="footer">
        <p className="h5-like">BASTIEN CAILHOL</p>
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
            .footer {
                display: flex;
                padding: 10px;
                align-items: baseline;
                justify-content: space-between;
                background: #ddd;
            }

            .menu li {
                display: inline-block;
                margin: 0 10px;
                text-transform: uppercase;
            }

            .menu li a {
                color: black;
                text-decoration: none;
            }
        `}</style>
    </div>
)
