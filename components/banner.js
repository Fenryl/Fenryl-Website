import React from 'react'

export default class Banner extends React.Component {
  render () {
    return (
      <div className='banner'>
        <div className='container col12'>
          <div className='avatar col2'>
            <img src='/static/id/ID.png' alt='avatar' />
          </div>
          <div className='about col8'>
            <h2>BASTIEN CAILHOL</h2>
            <h3>Développeur Web & Infographiste 2D/3D</h3>
            <p>
                            Issu d'une double formation en cinéma d'animation et en développement web et logiciel,
                            je cherche actuellement une entreprise pour enrichir son équipe et mes connaissances.
                        </p>
            <p>
                            Si ce site a pour fonction de présenter les projets sur lesquels j'ai travaillé
                            et partager mes dernières créations, il me sert aussi de lieu d'expérimentation et d'apprentissage.
                        </p>
            <p>
                            Bonne visite à vous !
                        </p>

          </div>
        </div>

        <style jsx>{`
                    .banner {
                        padding: 20px 0;
                        background-color: #f3f3f3;
                    }

                    .container {
                        display: flex;
                        margin: auto;
                        align-items: center
                    }

                    .avatar {
                        text-align: center;
                    }


                    img {
                        width: 150px;
                        image-rendering: pixelated;
                    }

                    .about {
                        padding-left: 20px;
                    }

                    h2, h3 {
                        font-family: 'open sans';
                    }

                    p {
                        margin-top: 10px;
                    }
                `}</style>
      </div>
    )
  }
}
