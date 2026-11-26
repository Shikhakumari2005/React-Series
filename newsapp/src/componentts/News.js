
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export default class News extends Component {


  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general",

  }
   
  PropsTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  // Keep your existing news array here
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0,
    };
  }

  async componentDidMount(){
    console.log("inside the CDM");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.PropsTypes.country}&category=${this.PropsTypes.category}&apiKey=227268948d704452ac2de8dcb3b38275&page=1 &pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    console.log(parseData);
    this.setState({articles:parseData.articles
    ,totalResults:parseData.totalResults,loading:false,
    })

  }

  handlePreviousClick=async()=>{
    console.log("Previos");

    // if (this.state.page-1<Math.ceil(this.state.totalResults/this.props.page)){

   

      let url=`https://newsapi.org/v2/top-headlines?country=${this.PropsTypes.country}&category=${this.PropsTypes.category}&apiKey=227268948d704452ac2de8dcb3b38275&page=${this.state.page-1} &pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData=await data.json();
      console.log(parseData);
      this.setState({articles:parseData.articles})
  
  
      this.setState({
        page:this.state.page-1,loading:false,
      })
    
  }
  handleNextClick=async()=>{
    console.log("Next");

    if (this.state.page+1>Math.ceil(this.state.totalResults/this.props.page)){

    }else{

      let url=`https://newsapi.org/v2/top-headlines?country=${this.PropsTypes.country}%category=${this.PropsTypes.country}&apiKey=227268948d704452ac2de8dcb3b38275&page=${this.state.page+1} &pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData= await data.json();
      console.log(parseData);
      this.setState({articles:parseData.articles})
  
  
      this.setState({
        page:this.state.page+1,loading:false,
      })
    }
  }

  render() {
    return (
      <div className="container my-4">
        <h1 className="text-centre">NewsApp - Top Headlines</h1>
        {!this.state.loading && this.state.loading && <Spinner/>}

        <div className="row ">
          {this.state.articles?.map((element) => {
            return (
              <div className="col-md-4" key={element.url}> 
              <NewsItems
                  
                  title={element.title.slice(0,40)}
                  description={element.description?.slice(0,80) || ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-4">
        <button 
        disabled={this.state.page<=1}
        type="button" className="btn-solid theme-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button
        disabled={this.state.page>= Math.ceil(this.state.totalResults / this.props.page)}
        type="button" className="btn-solid theme-primary" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>

      </div>
    );
  }
}
