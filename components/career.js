import React from 'react'

import CareerLine from './career-line'

export default class Studies extends React.Component {

    render() {
        return (
            <div className="career">
                <div className="studies col12">
                    <h4 className="title h5-like col2">Formations</h4>
                    <div className="careerLines">
                        <CareerLine
                            title="Titre professionnel de développeur web et logiciel"
                            place="ADRAR Digit@l Academy"
                            date="2016 - 2017"
                            city="Ramonville"
                        />
                        <CareerLine
                            title="Certificat de praticien en massage bien-être, agrégé FFMBE"
                            place="Institut Français des Sciences de l'Homme (IFSH)"
                            date="2013 - 2014"
                            city="Toulouse"
                        />
                        <CareerLine
                            title="Titre professionnel d'assistant réalisateur"
                            place="École des Métiers du Cinéma d'Animation (EMCA)"
                            date="2009 - 2012"
                            city="Angoulême"
                        />
                    </div>
                </div>
                <div className="experiences col12">
                    <h4 className="title h5-like col2">Expériences</h4>
                    <div className="careerLines">
                        <CareerLine
                            title="Stagiaire développeur front-end"
                            place="Yestudent"
                            date="2016"
                            city="Toulouse"
                            details= {<p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>}
                        />
                        <CareerLine
                            title="Stagiaire webdesigner et développeur front-end"
                            place="Overblog"
                            date="2016"
                            city="Toulouse"
                            details= {<p className="details">J’ai été en charge de développer un template graphique 
                                sur le thème de la cuisine. Les blogs culinaires représentent une part importante 
                                des hébergements sur la plateforme, mais aucun thème dédié n’avait encore été créé.</p>}
                        />
                    </div>
                </div>
                <style jsx>{`
                    .career {
                        padding-bottom: 20px;
                    }

                    .studies, .experiences {
                        display: flex;
                        justify-content: space-between;
                        padding: 20px 0;
                        margin: auto;
                    }

                    .careerLines {
                        flex: 1;
                    }

                    .details {
                        margin-top: 10px;
                    }



                `}</style>

            </div>
        )
    }
}
