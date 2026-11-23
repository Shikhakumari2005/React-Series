import Navbar from "./componentts/Navbar";
import News from "./componentts/News";

import React, { Component } from 'react'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    );
  }
}
