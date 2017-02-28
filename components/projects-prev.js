import React from 'react'


import ProjectThumbnail from './project-tn'

export default class ProjectsPreview extends React.Component {


    render() {
        return (
            <div>
                <div className="container col12">
                    <h4 className="title h5-like">Derniers projects Web</h4>
                    <div className="projectList">
                        <ProjectThumbnail
                            title="Bastien Cailhol"
                            image="bastiencailhol.png"
                            description="ça marche?"
                            path="BastienCailhol"/>
                        <ProjectThumbnail
                            title="Rogue Project"
                            image="rogueproject.png"
                            description="ça marche?"
                            path="RogueProject"/>
                        <ProjectThumbnail
                            title="Yestudent"
                            image="yestudent.png"
                            description="ça marche?"
                            path="Yestudent"/>
                        <ProjectThumbnail
                            title="Overblog"
                            image="overblog.png"
                            description="ça marche?"
                            path="Overblog"/>
                    </div>
                </div>
                <style jsx>{`
                    .container {
                        margin: auto;
                    }

                    .title {
                        margin-top: 20px;
                        text-transform: uppercase;
                        font-weight: bold;
                    }

                    .projectList {
                        display: flex;
                    }
                `}</style>
            </div>
        )
    }
}
