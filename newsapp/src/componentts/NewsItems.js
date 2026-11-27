import React, { Component } from 'react'

export default class
NewsItems extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;

    return (
      <div>
        
        <section className="card" style={{width: "320px"}}>
          <img src={imageUrl || "default-image.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">{title}...</h4>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className='text-muted'>
                By {!author? "unknow": author} on {" "}
                {date ? new Date(date).toGMTString() : "Unknown date"}</small></p>

                <p>
              <small className="text-muted">
                Source: {source || "Unknown"}
              </small>
            </p>


            <a href={newsUrl}  target="_black" className="btn-solid theme-primary">Read More</a>
          </div>
        </section>
      </div>
    )
  }
}
