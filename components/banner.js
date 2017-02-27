import React from 'react'

export default class Banner extends React.Component {


    render() {
        return (
            <div className="banner">
                <div className="container col12">
                    <div className="avatar col2">
                        <img src="/static/assets/ID_Background.png" rel="avatar"/>
                    </div>
                    <div className="about col10">
                        <h2>Bastien Cailhol</h2>
                        <h3>Développeur Web & Designer</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                         
                    </div>
                </div>

                <style jsx>{`
                    .banner {
                        padding: 20px 0;
                        background-color: #fafafa;
                    }

                    .container {
                        display: flex;
                        margin: auto;
                        text-align: center;
                        align-items: center
                    }

                    .avatar {
                        text-align: center;
                    }


                    img {
                        width: 150px;
                        image-rendering: pixelated;
                    }

                    .about {
                        padding-left: 20px;
                        padding-right: 40px;
                    }
                `}</style>
            </div>
        )
    }
}
