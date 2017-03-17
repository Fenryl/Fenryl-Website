import React from "react";

import ProjectThumbnail from "./project-tn";

export default class ProjectsPreview extends React.Component {
  render() {
    return (
      <div className="projects col12">
        <h4 className="title h5-like">Derniers projets Web</h4>
        <div className="projectList">
          <div className="project">
            <ProjectThumbnail
              title="Bastien Cailhol"
              image="bastiencailhol.png"
              description="Mon site perso"
              path="BastienCailhol"
            />
          </div>
          <div className="project">
            <ProjectThumbnail
              title="Rogue Project"
              image="rogueproject.png"
              description="Jeu web en JavaScript"
              path="RogueProject"
            />
          </div>
          <div className="project">
            <ProjectThumbnail
              title="Yestudent"
              image="yestudent.png"
              description="Site d'hébergement entre étudiants"
              path="Yestudent"
            />
          </div>
          <div className="project">
            <ProjectThumbnail
              title="Overblog"
              image="overblog.png"
              description="Plateforme de micro-blogging"
              path="Overblog"
            />
          </div>
        </div>
        <style jsx>
          {
            `
                    .projects {
                        padding-top: 40px;
                        margin: 0 auto;
                    }

                    .projectList {
                        display: flex;
                    }

                    .project {
                        width: 25%;
                        margin: 20px 20px 0 0;
                        margin-left: 0;
                        
                    }

                    .project:last-child {
                        margin-right: 0;
                    }
                `
          }
        </style>
      </div>
    );
  }
}
