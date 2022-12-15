import { getByDisplayValue } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right:'0'}}>
                        
                    <span className="badge rounded-pill bg-danger">
                    {source}

                </span>
                    </div>
                    <img src={!imageUrl ? "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/untitled-design-1670383855.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
