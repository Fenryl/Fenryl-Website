import React from 'react'

import IlluThumbnail from './illu-tn'

export default class IlluPreview extends React.Component {


    render() {
        return (
            <div>
                <div className="illustrations col12">
                    <h4 className="title h5-like">Dernières illustrations</h4>
                    <div className="illuList">
                        <div className="illu">
                            <IlluThumbnail
                                image="illu_mao.jpg"
                                description="flat desgin"
                                path="Mao"
                            />
                        </div>
                        <div className="illu">
                            <IlluThumbnail
                                image="illu_lordedmund.jpg"
                                description="polygon"
                                path="LordEdmund"
                            />
                        </div>
                        <div className="illu">
                            <IlluThumbnail
                                image="illu_bobby.jpg"
                                description="digital painting"
                                path="BobbyChiuTribute"
                            />  
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .illustrations {
                        margin: 0 auto 40px;
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
                        height: 230px;
                        width: 33.33%;
                        margin: 20px 20px 0 0;
                    }

                    .illu:last-child {
                        margin-right: 0;
                    }
                `}</style>
            </div>
        )
    }
}
