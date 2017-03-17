import React from 'react'
import LazyImg from './lazy-img'

export default class SkillDetail extends React.Component {
  render () {
    const { name, description, img } = this.props
    return (
      <div className='skill col12'>
        <div className='icon col4'>
          <LazyImg src={img} alt={name} />
        </div>
        <div className='info col8'>
          <h3 className='title'>{name}</h3>
          <div className='description'>{description}</div>
        </div>
        <style jsx>{`
          .skill {
              display: flex;
              padding: 20px 0;
          }

          .icon {
              display: flex;
              align-items: center;
              justify-content: center;
              color: black;
          }

          .info {
              padding-left: 20px;
          }

          .title {
              font-size: 2em;
              line-height: 1em;
          }

          .description {
              margin-top: 10px;
          }
        `}</style>
      </div>
    )
  }
}
