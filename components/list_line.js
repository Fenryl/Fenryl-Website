import React from 'react'

export default class ListLine extends React.Component {


    render() {
        const {title, place, details, date, city} = this.props;
        return (
            <div className="listLine">
                <div className="description">
                    <h5 className="title">
                        {title}
                    </h5>
                    <p className="place">
                        {place}
                    </p>
                    {details}
                </div>
                <div className="info">
                    <p className="date">
                        {date}
                    </p>
                    <p className="city">
                        {city}
                    </p>
                </div>
                <style jsx>{`
                    .listLine {
                        display: flex;
                        margin-top: 20px;
                    }

                    .description {
                        flex: 4;
                        margin-right: 40px;
                    }
                    
                    .info {
                        flex: 1;
                    }

                    .title {
                        color: red;
                    }
                    
                    .place {
                        font-style: italic;
                    }
                `}</style>

            </div>
        )
    }
}
