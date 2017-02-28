import React from 'react'

import Link from 'next/link'

export default class ProjectThumbnail extends React.Component {


    render() {

        const {title, image, description, path} = this.props;

        return (
            <div className="container col3">
                <Link href={`/dev/${path}`} className="link">
                    <div className="project-tn">
                            <img src={`/static/projects/${image}`} alt={`${title} thumbnail`}/>
                        <div className="info">
                            <h4 className="title">{title}</h4>
                            <p className="description">{description}</p>
                        </div>

                        <style jsx>{`
                        .project-tn {
                            margin: 20px 10px;
                            background: #f1f1f1;
                            border-radius: 3px;
                            cursor: pointer;
                        }

                        .project-tn:hover {
                            box-shadow: 0px 6px 10px 0px #c4c4c4, 0px 0px 20px 0px #f1f1f1;
                        }

                        .info {
                            padding: 5px 10px;
                        }

                        .description {
                            color: #888;
                        }

                        img {
                            object-fit: contain;
                            margin: auto;
                        }
                        `}</style>
                    </div>
                </Link>
            </div>
        )
    }
}
