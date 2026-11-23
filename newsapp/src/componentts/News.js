import React, { Component } from 'react'
import NewsItems from "./NewsItems";

export  class News extends Component {
  render() {
    return (
      <div className="container">
        <h1> NewsApp -Top Headlines</h1>
        
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        <NewsItems title="mytitle" description="myRadhaRaman"/>
        <NewsItems  title="mytitle" description="myRadhaRaman"/>
        <NewsItems  title="mytitle" description="myRadhaRaman"/>
        </div>

    );
  }
}
export default News;
