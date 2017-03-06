import React from 'react'

export default class SkillDetail extends React.Component {



    render() {
        const {title, description, icon} = this.props;
        return (
            <div className="skill col12">
                <div className="icon col4">{icon}</div>
                <div className="info col8">
                    <h3 className="title">{title}</h3>
                    {description}
                </div>

                <style jsx>{`
                    .skill {
                        display: flex;
                        margin: 0 auto 20px;
                        padding-left: 20px;
                    }
                    .icon {
                        display: flex;
                        height: 8em;
                        align-items: center;
                        justify-content: center;
                        color: black;
                    }

                    .info {
                        padding-left: 20px;
                    }

                `}</style>
            </div>
        )
    }
}
