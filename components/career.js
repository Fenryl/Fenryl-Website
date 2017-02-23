import React from 'react'

import ListLine from './list_line'

export default class Studies extends React.Component {

    render() {
        return (
            <div className="career">
                <div className="studies">
                    <h4 className="title h5-like">Formations</h4>
                    <div className="listLines">
                        <ListLine
                            title="Titre professionnel de développeur web et logiciel"
                            place="ADRAR Digit@l Academy"
                            date="2016 - 2017"
                            city="Ramonville"
                        />
                        <ListLine
                            title="Titre professionnel d'assistant réalisateur"
                            place="École des Métiers du Cinéma d'Animation (EMCA)"
                            date="2009 - 2012"
                            city="Angoulême"
                        />
                        <ListLine
                            title="Baccalauréat ES (mention AB)"
                            place="Lycée Victor Hugo"
                            date="2007"
                            city="Colomiers"
                        />
                    </div>
                </div>
                <div className="experiences">
                    <h4 className="title h5-like">Expériences</h4>
                    <div className="listLines">
                        <ListLine
                            title="Stagiaire développeur front-end"
                            place="Yestudent"
                            date="2016"
                            city="Toulouse"
                            details= {<p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>}
                        />
                        <ListLine
                            title="Titre professionnel de Développeur web et logiciel"
                            place="ADRAR Digit@l Academy"
                            date="2016 - 2017"
                            city="Ramonville"
                            details= {<p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>}
                        />
                        <ListLine
                            title="Titre professionnel de Développeur web et logiciel"
                            place="ADRAR Digit@l Academy"
                            date="2016 - 2017"
                            city="Ramonville"
                            details= {<p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat.</p>}
                        />
                    </div>
                </div>
                <style jsx>{`
                    .studies, .experiences {
                        display: flex;
                        justify-content: space-between;
                        margin: 0 auto 40px;
                        width: 960px;
                    }

                    .title {
                        flex: 1;
                        margin-top: 20px;
                        text-transform: uppercase;
                        font-weight: bold;

                    }

                    .listLines {
                        flex: 3;
                    }

                    .details {
                        margin-top: 10px;
                    }



                `}</style>

            </div>
        )
    }
}
