import React from 'react'

import Link from 'next/link'

export default class ProjectThumbnail extends React.Component {


    render() {

        const {title, image, description, link} = this.props;

        return (
            <div className="container col3">
                <Link href={`/dev/${link}`} className="link">
                    <div className="project-tn">
                        <div className="image" >
                            <img src={`/static/projects/${image}`} alt={`${title} thumbnail`}/>
                        </div>
                        <h4 className="title">{title}</h4>
                        <p className="description">{description}</p>

                        <style jsx>{`
                        .project-tn {
                            margin: 20px 5px;
                            padding: 10px;
                            background: #f1f1f1;
                            cursor: pointer;
                        }

                        .image {
                            height: 160px;
                            width: 100%;
                        }

                        img {
                            object-fit: contain;
                            margin: auto;
                        }

                        .title {
                        }
                        `}</style>
                    </div>
                </Link>
            </div>
        )
    }
}
