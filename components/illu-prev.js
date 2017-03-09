import React from 'react'

import IlluThumbnail from './illu-tn'

export default class IlluPreview extends React.Component {


    render() {
        return (
            <div>
                <div className="illustrations col12">
                    <h4 className="title h5-like">Dernières illustrations</h4>
                    <ul className="illuList">
                        <li className="illu">
                            <IlluThumbnail
                                image="mao.jpg"
                                description="flat desgin"
                                path="Mao"
                            />
                        </li>
                        <li className="illu">
                            <IlluThumbnail
                                image="lordedmund.jpg"
                                description="polygon"
                                path="LordEdmund"
                            />
                        </li>
                        <li className="illu">
                            <IlluThumbnail
                                image="bobby.jpg"
                                description="digital painting"
                                path="BobbyChiuTribute"
                            />  
                        </li>
                    </ul>
                </div>
                <style jsx>{`
                    .illustrations {
                        padding: 40px 0;
                        margin: 0 auto;
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
