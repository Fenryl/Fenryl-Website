import React from 'react'

export default class SkillDetail extends React.Component {



    render() {
        const {title, description, img} = this.props;
        return (
            <div className="skill col12">
                <div className="icon col4">
                    <img src={`/static/skills/blurred/${img}.png`} alt={title}/>
                </div>
                <div className="info col8">
                    <h3 className="title">{title}</h3>
                    {description}
                </div>

                <style jsx>{`
                    .skill {
                        display: flex;
                        padding: 20px 0;
                    }
                    .icon {
                        display: flex;
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
