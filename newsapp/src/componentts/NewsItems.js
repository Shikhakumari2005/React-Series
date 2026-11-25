import React, { Component } from 'react'

export default class
NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;

    return (
      <div>
        
        <section className="card" style={{width: "320px"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">{title}...</h4>
            <p className="card-text">{description}...</p>
            <a href={newsUrl}  target="_black" className="btn-solid theme-primary">Read More</a>
          </div>
        </section>
      </div>
    )
  }
}
