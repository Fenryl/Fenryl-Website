import React from 'react'

import { RadioGroup, Radio } from 'react-radio-group'

import SkillDetail from './skill-detail'


export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.setSkill = this.setSkill.bind(this);
        this.state = {
            skills: [
                {
                    name: "javascript",
                    description: "super langage !",
                    icon: "javascript"
                },
                {
                    name: "PHP",
                    description: "bof...",
                    icon: "php"
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
                <div className="container">
                    <SkillDetail
                        title={this.state.currentTitle}
                        description={this.state.currentDescription}
                        icon={this.state.currentIcon}
                    />
                </div>
                <div className="skillMenu" onChange={this.setSkill}>
                    {skillList.map((data, i) => (
                        <label key={`label_${i}`}>
                            <input defaultChecked={i === 0 ? true : false} type="radio" name="skill" value={i} key={`label_${i}`} />{data.name}
                        </label>
                    ))
                    }
                </div>

                <style jsx>{`
                    
                `}</style>
            </div>
        )
    }
}
