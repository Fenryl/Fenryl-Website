import React from 'react'

import Link from 'next/link'

export default ({image, description, path}) => (
    <Link href={`/dev/${path}`} className="link">
        <div className="illu-tn">
            <img src={`/static/illustrations/${image}`} alt={image}/>
            <div className="info">
                <p className="description">{description}</p>
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

                .illu-tn:hover {
                    box-shadow: 0px 6px 10px 0px #c4c4c4, 0px 0px 20px 0px #f1f1f1;
                }

                .illu-tn:hover .info {
                    display: block;
                }

                .illu-tn:hover img {
                    transform: translateY(-5px) scale(1.1);
                }

                .info {
                    display: none;
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    padding: 10px;
                    background: #f6f6f6;
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