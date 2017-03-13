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
                        <div>
                            <p>
                                Véritable couteau-suisse du web, c'est le langage dans laquel je souhaite me spécialiser.
                            </p>
                            <p>
                                La richesse de ses bibliothèques en fait un outil de choix pour la création et 
                                l'intégration de contenus visuels dynamiques. 
                            </p>
                            <p>
                                Je l'ai choisi pour développer le jeu web Rogue Project, 
                                grâce au framework <a href='https://phaser.io' target='_blank' className="link">Phaser</a>.
                            </p>
                            <p>
                                J'ai approfondi mes connaissances en langage objet lors de mon stage chez Yestudent, où j'ai 
                                créé des composants web avec React/Redux et avec AngularJS.
                            </p>
                            <p>
                                J'ai également choisi la technologie React (boostée avec le framework NextJS) pour réaliser ce site.
                            </p>
                        </div>,
          img: 'javascript'
        },
        {
          name: 'HTML/CSS',
          description:
                        <div>
                            <p>
                                C'est par ce binôme magique que j'ai débuté ma transition vers la programmation.
                            </p>
                            <p>
                                Les nouveaux outils apportés avec HTML5 ne doivent pas être sous-estimés et 
                                certains très puissants demandent encore à être explorés, comme la technologie Canvas.
                            </p>
                            <p>
                                Ma formation d'infographiste m'a donné le goût des belles choses. Ou c'est peut-être l'inverse.
                                Quoi qu'il en soit, j'aime faire du CSS, et je crois en la toute-puissance de FlexBox.
                            </p>
                            <p>
                                J'ai également appris à utiliser le pré-processeur <a href="http://stylus-lang.com/" 
                                target='_blank' className="link">Stylus</a> lors de mon stage chez Yestudent, 
                                facilitant grandement l'écriture des stylesheets.
                            </p>

                        </div>,
          img: 'html_css'
        },
        {
          name: 'PHP',
          description:
                        <div>
                            <p>
                                Choix historique pour la création de pages web dynamiques, il m'a séduit pour son 
                                étonnante simplicité.
                            </p>
                            <p>
                                Je l'ai choisi pour développer le site destiné à héberger le jeu web Rogue Project.
                            </p>
                            <p>
                                Ma connaissance du langage est encore basique mais suffisante pour créer des applications web 
                                dynamiques.
                            </p>
                        </div>,
          img: 'php'
        },
        {
          name: 'MySQL',
          description:
                        <div>
                            <p>
                                Ma formation en développement web s'est largement orientée sur la gestion des bases de données.
                            </p>
                            <p>
                                C'est le système de gestion qui accompagné la majorité de mes projets scolaires, et c'est
                                celui que j'ai choisi pour Rogue Project.
                            </p>
                            <p>
                                J'utilise la méthode Merise pour l'analyse et la conception des systèmes d'information.
                            </p>
                        </div>,
          img: 'mysql'
        },
        {
          name: 'Graphisme',
          description:
                        <div>
                            <p>
                                Ma première passion.
                            </p>
                            <p>
                                Elle dirige encore aujourd'hui ma façon de créer et de comprendre les choses.
                            </p>
                            <p>
                                Mon parcours m'a amené à considérer le dessin, ou plus largement la concepton graphique,
                                comme un outil plus que comme une finalité : je prends aujourd'hui le même plaisir à dessiner des 
                                trolls ou des icônes (j'ai d'ailleurs créé les images ci-contre).
                            </p>
                            <p>
                                Ma transition du domaine du cinéma et du jeu-vidéo à celui du web m'ouvre un champ créatif nouveau 
                                et constitue un challenge stimulant.
                            </p>
                        </div>,
          img: 'graphisme'
        },
        {
          name: 'Animation 2D/3D',
          description:
                        <div>
                            <p>
                                C'est probablement l'outil de communication le plus puissant qui soit. C'est en tout cas celui 
                                qui me correspond le plus.
                            </p>
                            <p>
                                Que ce soit en 2D ou en 3D, je prends un réel plaisir à donner vie à des personnages ou à des objets.
                                J'ai eu la chance de recevoir des cours d'acting et de mîme de qualité, et je considère le mouvement
                                comme un langage.
                            </p>
                            <p>
                                J'ai d'ailleurs réalisé <a href="https://vimeo.com/65824958" target='_blank' className="link">un court-métrage</a>, 
                                et j'ai collaboré sur plusieurs <a href="https://www.youtube.com/watch?v=DRy9Me5e3nU" target='_blank' className="link">projets en motion design</a>.
                            </p>
                            <p>
                                La complexité de ce média m'a apporté un savoir-faire et une rigueur qui me servent aujourd'hui dans 
                                toutes les approches créatives, y compris la programmation.
                            </p>

                        </div>,
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
          <h4>Compétences</h4>
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
