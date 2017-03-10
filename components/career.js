import React from 'react'

import CareerLine from './career-line'

export default class Studies extends React.Component {
  render () {
    return (
      <div className='career'>
        <div className='studies col12'>
          <h4 className='title h5-like col2'>Formations</h4>
          <div className='careerLines'>
            <CareerLine
              title='Titre professionnel de développeur web et logiciel'
              place='ADRAR Digit@l Academy'
              date='2016 - 2017'
              city='Ramonville'
                        />
            <CareerLine
              title='Certificat de praticien en massage bien-être, agrégé FFMBE'
              place="Institut Français des Sciences de l'Homme (IFSH)"
              date='2013 - 2014'
              city='Toulouse'
                        />
            <CareerLine
              title="Titre professionnel d'assistant réalisateur"
              place="École des Métiers du Cinéma d'Animation (EMCA)"
              date='2009 - 2012'
              city='Angoulême'
                        />
          </div>
        </div>
        <div className='experiences col12'>
          <h4 className='title h5-like col2'>Expériences</h4>
          <div className='careerLines'>
            <CareerLine
              title='Stagiaire développeur front-end'
              place='Yestudent'
              date='2016'
              city='Toulouse'
              details={
                <ul>
                  <li className='details'>
                    <p>Développement de la page d'annonce pour nouvelle version du site Yestudent.com.</p>
                    <p className="skills">React, Redux, Stylus, jQuery</p>
                  </li>
                  <li className='details'>
                    <p>Maintenance de la page paiement sur l'ancienne version.</p>
                    <p className="skills">AngularJS, Jade, Stylus</p>
                  </li>
                  <li className='details'>
                    <p>Évolution du CRM.</p>
                    <p className="skills">Webdesign</p>
                  </li>
                </ul>}
                        />
            <CareerLine
              title='Stagiaire développeur front-end'
              place='Overblog'
              date='2016'
              city='Toulouse'
              details={
                <div className='details'>
                  <p>Développement d'un thème de blog personnalisable, responsive et multi-plateformes.</p>
                  <p className="skills">Web design, HTML, CSS, Twig, jQuery</p>
                </div>
              }
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

                    .skills {
                      color: #777;
                      font-style: italic;
                    }



                `}</style>

      </div>
    )
  }
}
