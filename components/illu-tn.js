import React from 'react'
import Link from 'next/link'
import LazyImg from './lazy-img'

export default ({image, description, path}) => (
  <Link href={`/dev/${path}`} className='link'>
    <div className='illu-tn'>
      <LazyImg src={`/static/illustrations/LD/${image}`} alt={image} />
      <div className='info'>
        <p className='description'>{description}</p>
      </div>

      <style jsx>{`

                .illu-tn {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    border-radius: 3px;
                    cursor: pointer;
                    overflow: hidden;
                }

                .illu-tn:hover .info {
                    transform: translateY(0);
                }

                .illu-tn:hover img {
                    transform: translateY(-5px) scale(1.1);
                }

                .illu-tn, .info, img {
                    transition: all .1s ease-out;
                }


                .info {
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    transform: translateY(100%);
                    padding: 10px;
                    background: #f3f3f3;
                }

                .description {
                    color: #888;
                }

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            `}</style>
    </div>
  </Link>
)
