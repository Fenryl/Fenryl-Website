import React from 'react'

export default class SkillDetail extends React.Component {


    render() {
        const {title, description, icon} = this.props;
        return (
            <div className="skill">
                <i className={`devicon-${icon}-original`}></i>
                <div className="info">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                </div>

                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}
