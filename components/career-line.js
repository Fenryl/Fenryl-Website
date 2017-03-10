import React from 'react'

export default class CareerLine extends React.Component {
  render () {
    const {title, place, details, date, city} = this.props
    return (
      <div className='careerLine'>
        <div className='description col8'>
          <h5 className='header'>
            {title}
          </h5>
          <p className='place'>
            {place}
          </p>
          <div className='details'>
            {details}
          </div>
        </div>
        <div className='info col2'>
          <p className='date'>
            {date}
          </p>
          <p className='city'>
            {city}
          </p>
        </div>
        <style jsx>{`
                    .careerLine {
                        display: flex;
                        margin-top: 20px;
                    }

                    .careerLine:first-child {
                        margin-top: 0;
                    }

                    .description {
                        padding-left: 20px;
                    }

                    .header {
                        color: #ed0000;
                    }
                    
                    .place {
                        font-style: italic;
                    }

                    .details {
                        color: #777;
                    }

                    .info {
                        padding-left: 40px;
                    }
                `}</style>

      </div>
    )
  }
}
