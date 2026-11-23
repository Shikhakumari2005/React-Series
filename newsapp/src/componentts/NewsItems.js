import React, { Component } from 'react'

export default class
NewsItems extends Component {
  render() {
    let {title,discription}=this.props;
    return (
      <div>
        
        <section classNameName="card" style={{width: "320px"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{discription}</p>
            <a href="/NewsDetails" className="btn-solid theme-primary">Go somewhere</a>
          </div>
        </section>
      </div>
    )
  }
}
