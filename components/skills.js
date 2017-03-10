import React from 'react'

import Icon from './icon'
import SkillDetail from './skill-detail'

export default class Skills extends React.Component {
  constructor (props) {
    super(props)
    this.setSkill = this.setSkill.bind(this)
    this.state = {
      skills: [
        {
          name: 'JavaScript',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'javascript'
        },
        {
          name: 'HTML/CSS',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'html_css'
        },
        {
          name: 'PHP',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'php'
        },
        {
          name: 'MySQL',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'mysql'
        },
        {
          name: 'Graphisme',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'graphisme'
        },
        {
          name: 'Animation 2D/3D',
          description:
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>,
          img: 'animation',
        }
      ],
      currentSkill: '',
      selectedSkill: ''
    }
  }

  setSkill (event) {
    this.setState({ currentSkill: this.state.skills[event.target.value], selectedSkill: [event.target.value] })
  }

  componentWillMount () {
    this.setState({ currentSkill: this.state.skills[0], selectedSkill: [0] })
  }

  render () {
    let skillList = this.state.skills

    return (
      <div className='skills'>
        <div className='container col12'>
          <h4 className='title h5-like'>Compétences</h4>
          <SkillDetail
            name={this.state.currentSkill.name}
            description={this.state.currentSkill.description}
            img={this.state.currentSkill.img}
                    />
          <div className='skillMenu' onChange={this.setSkill}>
            {skillList.map((data, i) => (
              <label className={this.state.selectedSkill == i ? 'checked menuItem' : 'menuItem'} key={`label_${i}`}>
                <input defaultChecked={i === 0} type='radio' name='skill' value={i}
                  key={`label_${i}`} />{data.name}
              </label>
                        ))
                        }
          </div>
        </div>

        <style jsx>{`
                    .skills {
                        padding: 20px 0;
                        background-color: #f3f3f3;
                    }

                    .container {
                        margin: auto;
                    }

                    .skillMenu {
                        display: flex;
                        margin: auto;
                    }

                    .menuItem {
                        flex: 1;
                        padding: 10px 0;
                        margin-left: 4px;
                        text-align: center;
                        background: #ccc;
                    }

                    .menuItem:first-child {
                        margin-left: 0;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }

                    .menuItem:last-child {
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                    }

                    .menuItem:hover, .checked {
                        background: #bbb;
                    }

                    .menuItem {
                        transition: all .1s ease-out;
                    }

                    .menuItem input {
                        display: none;
                    }

                    .checked, .checked:hover {
                        background: #d92020;
                        color: white;
                    }
                `}</style>
      </div>
    )
  }
}
