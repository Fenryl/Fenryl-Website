import React from 'react'

import Link from 'next/link'

export default class ProjectThumbnail extends React.Component {


    render() {

        const {image, description, path} = this.props;

        return (
                <Link href={`/dev/${path}`} className="link">
                    <div className="illu-tn">
                        <img src={`/static/projects/${image}`} alt={`dessin`}/>
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
                                transform: translateY(-8px) scale(1.1);
                            }

                            .info {
                                display: none;
                                position: absolute;
                                width: 100%;
                                bottom: 0;
                                padding: 5px 10px;
                                background: #f1f1f1;
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
    }
}
