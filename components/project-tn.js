import React from 'react'

import Link from 'next/link'

export default ({ title, image, description, path }) => (
    <Link href={`/dev/${path}`} className="link">
        <div className="project-tn">
            <div className="image">
                <img src={`/static/projects/${image}`} alt={`${title} thumbnail`} />
            </div>
            <div className="info">
                <h4 className="title">{title}</h4>
                <p className="description">{description}</p>
            </div>

            <style jsx>{`
            .project-tn {
                width: 225px;
                background: #f6f6f6;
                border-radius: 3px;
                cursor: pointer;
            }

            .image {
                overflow: hidden;
            }

            .project-tn:hover {
                box-shadow: 0px 6px 10px 0px #c4c4c4, 0px 0px 20px 0px #f1f1f1;
            }

            .project-tn:hover img {
                transform: translateY(-5px) scale(1.05);
            }

            .project-tn, .project-tn img {
                transition: all .1s ease-out;
            }

            .info {
                padding: 10px;
            }

            .info p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .description {
                color: #888;
            }

            img {
                width: 100%;
                object-fit: contain;
                margin: auto;
            }
            `}</style>
        </div>
    </Link>
)