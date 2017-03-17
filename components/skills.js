import React from "react";

import LazyImg from "./lazy-img";
import SkillDetail from "./skill-detail";

const SKILLS = [
  {
    name: "JavaScript",
    img: "/static/skills/javascript.png",
    description: (
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
          grâce au framework
          {" "}
          <a href="https://phaser.io" target="_blank" className="link">
            Phaser
          </a>
          .
        </p>
        <p>
          J'ai approfondi mes connaissances en langage objet lors de mon stage chez Yestudent, où j'ai
          créé des composants web avec React/Redux et avec AngularJS.
        </p>
        <p>
          J'ai également choisi la technologie React (boostée avec le framework NextJS) pour réaliser ce site.
        </p>
      </div>
    )
  },
  {
    name: "HTML/CSS",
    img: "/static/skills/html_css.png",
    description: (
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
          J'ai également appris à utiliser le pré-processeur
          {" "}
          <a href="http://stylus-lang.com/" target="_blank" className="link">
            Stylus
          </a>
          {" "}
          lors de mon stage chez Yestudent,
          facilitant grandement l'écriture des stylesheets.
        </p>
      </div>
    )
  },
  {
    name: "PHP",
    description: (
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
      </div>
    ),
    img: "/static/skills/php.png"
  },
  {
    name: "MySQL",
    img: "/static/skills/mysql.png",
    description: (
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
      </div>
    )
  },
  {
    name: "Graphisme",
    img: "/static/skills/graphisme.png",
    description: (
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
      </div>
    )
  },
  {
    name: "Animation 2D/3D",
    img: "/static/skills/animation.png",
    description: (
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
          J'ai d'ailleurs réalisé
          {" "}
          <a href="https://vimeo.com/65824958" target="_blank" className="link">
            un court-métrage
          </a>
          ,
          et j'ai collaboré sur plusieurs
          {" "}
          <a
            href="https://www.youtube.com/watch?v=DRy9Me5e3nU"
            target="_blank"
            className="link"
          >
            projets en motion design
          </a>
          .
        </p>
        <p>
          La complexité de ce média m'a apporté un savoir-faire et une rigueur qui me servent aujourd'hui dans
          toutes les approches créatives, y compris la programmation.
        </p>
      </div>
    )
  }
];

export default class Skills extends React.Component {
  constructor() {
    super();

    this.setSkill = this.setSkill.bind(this);
    this.state = {
      selectedSkill: 0
    };
  }

  setSkill(index) {
    this.setState({
      selectedSkill: index
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.selectedSkill !== nextState.selectedSkill;
  }

  render() {
    const { selectedSkill } = this.state;
    const currentSkill = SKILLS[selectedSkill];
    return (
      <div className="skills">
        <div className="container col12">
          <h4 className="title h5-like">Compétences</h4>
          <SkillDetail
            name={currentSkill.name}
            description={currentSkill.description}
            img={currentSkill.img}
          />
          <div className="skillMenu">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className={
                  selectedSkill === index ? "checked menuItem" : "menuItem"
                }
                onClick={() => this.setSkill(index)}
                onMouseOver={() => LazyImg.prefetch(skill.img)}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <style jsx>
          {
            `
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
              transition: all .1s ease-out;
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

          .menuItem:not(.checked):hover {
              background: #bbb;
              cursor: pointer;
          }

          .checked {
              background: #d92020;
              color: white;
          }
        `
          }
        </style>
      </div>
    );
  }
}
