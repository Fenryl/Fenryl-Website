import React from 'react'

import IlluThumbnail from './illu-tn'

export default class IlluPreview extends React.Component {


    render() {
        return (
            <div>
                <div className="container col12">
                    <h4 className="title h5-like">Dernières illustrations</h4>
                    <div className="illuList">
                        <div className="illu">
                            <IlluThumbnail
                                image="bastiencailhol.png"
                                description="pixel art"
                                path="BastienCailhol"
                            />
                        </div>
                        <div className="illu">
                            <IlluThumbnail
                                image="bastiencailhol.png"
                                description="pixel art"
                                path="BastienCailhol"
                            />
                        </div>
                        <div className="illu">
                            <IlluThumbnail
                                image="bastiencailhol.png"
                                description="pixel art"
                                path="BastienCailhol"
                            />  
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        margin: auto;
                    }

                    .title {
                        margin-top: 20px;
                        text-transform: uppercase;
                        font-weight: bold;
                    }

                    .illuList {
                        display: flex;
                    }

                    .illu {
                        height: 200px;
                        width: 33.33%;
                        margin: 10px 20px 10px 0;
                        border: 1px solid black;
                    }

                    .illu:last-child {
                        margin-right: 0;
                    }
                `}</style>
            </div>
        )
    }
}
