import React from 'react'

import SkillDetail from './skill-detail'


export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.setSkill = this.setSkill.bind(this);
        this.state = {
            skills: [
                {
                    name: "JavaScript",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="devicon-javascript-plain"></i>
                            <style jsx>{`i {font-size: 6em;}`}</style>
                        </div>
                },
                {
                    name: "HTML/CSS",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="devicon-html5-plain-wordmark"></i>
                            <i className="devicon-css3-plain-wordmark"></i>
                            <style jsx>{`i {font-size: 5em;}`}</style>
                        </div>
                },
                {
                    name: "PHP",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="devicon-php-plain"></i>
                            <style jsx>{`i {font-size: 9em;}`}</style>
                        </div>
                },
                {
                    name: "MySQL",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="devicon-mysql-plain-wordmark"></i>
                            <style jsx>{`i {font-size: 9em;}`}</style>
                        </div>
                },
                {
                    name: "Design graphique",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="fa fa-pencil"></i>
                            <style jsx>{`i {font-size: 5em;}`}</style>
                        </div>
                },
                {
                    name: "Animation 2D/3D",
                    description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
                    icon:
                        <div>
                            <i className="material-icons">live_tv</i>
                            <style jsx>{`i {font-size: 7em;}`}</style>
                        </div>
                }
            ],
            currentTitle: "",
            currentDescription: "",
            currentIcon: ""
        }
    }

    setSkill(event) {
        this.setState({
            currentTitle: this.state.skills[event.target.value].name,
            currentDescription: this.state.skills[event.target.value].description,
            currentIcon: this.state.skills[event.target.value].icon
        });
    }

    componentWillMount() {
        this.setState({
            currentTitle: this.state.skills[0].name,
            currentDescription: this.state.skills[0].description,
            currentIcon: this.state.skills[0].icon
        });
    }


    render() {
        let skillList = this.state.skills;


        return (
            <div className="skills">
                <SkillDetail
                    title={this.state.currentTitle}
                    description={this.state.currentDescription}
                    icon={this.state.currentIcon}
                />
                <div className="skillMenu col12" onChange={this.setSkill}>
                    {skillList.map((data, i) => (
                        <label className="menuItem" key={`label_${i}`}>
                            <input defaultChecked={i === 0} type="radio" name="skill" value={i}
                                   key={`label_${i}`}/>{data.name}
                        </label>
                    ))
                    }
                </div>

                <style jsx>{`
                    .skills {
                        padding: 20px 0;
                        background-color: #fafafa;
                    }

                    .skillMenu {
                        display: flex;
                        margin: auto;
                    }

                    .menuItem {
                        flex: 1;
                        padding: 10px 0;
                    }
                `}</style>
            </div>
        )
    }
}
