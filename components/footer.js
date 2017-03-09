import React from 'react'

import Link from 'next/link'

import Icon from './icon'

export default () => (
    <div className="footer">
        <p>Copyright © 2012 | Bastien Cailhol</p>
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
                padding: 0 10px;
                align-items: baseline;
                justify-content: space-between;
                background: #ddd;
                font-family: 'open sans';
            }


            .menu li {
                padding: 8px 0;
                display: inline-block;
                text-transform: uppercase;
            }

            .menu li a {
                padding: 10px;
                color: black;
                text-decoration: none;
            }

            .menu li:hover {
                color: #d92020;
                background: #bbb;
            }

            .menu li {
                transition: all .1s ease-out;
            }
        `}</style>
    </div>
)
