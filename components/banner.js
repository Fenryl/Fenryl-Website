import React from 'react'

export default class Banner extends React.Component {


    render() {
        return (
            <div className="banner">
                <div className="container">
                        <img className="avatar" src="/static/assets/ID_Background.png" rel="avatar" />
                    <div className="about">
                        <h2 className="about">Bastien Cailhol</h2>
                        <h3>Développeur Web & Designer</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                         
                    </div>
                </div>

                <style jsx>{`
                    .banner {
                        background-color: #fafafa;
                    }

                    .container {
                        display: flex;
                        width: 960px;
                        margin: auto;
                        text-align: center;
                        align-items: center
                    }

                    .avatar {
                        margin: 20px 25px;
                        width: 150px;
                        image-rendering: pixelated;
                    }

                    .about {
                        flex: 1;
                        margin: 0 40px;
                    }

                    .pdfDownload {
                        margin-top: 20px
                    }
                `}</style>
            </div>
        )
    }
}
