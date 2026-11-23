import React, { Component } from 'react'
import NewsItems from "./NewsItems";

export  class News extends Component {
  render() {
    return (
      <div className="container">
        <h1> NewsApp -Top Headlines</h1>
        
        <div className="row">
          <div className="col-md-3">
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        </div>
        <div className="col-md-3">
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        </div>
        <div className="col-md-3">
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        </div>
        <div className="col-md-3">
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        </div>
        </div>
        </div>

    );
  }
}
export default News;
