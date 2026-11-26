import React, { Component } from 'react'
import Navbar from "./componentts/Navbar";
import News from "./componentts/News";
import {BrowserRouter ,Router ,Route} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div>

        <BrowserRouter>
          <Navbar/>
          <Router>

              <Route  exact  path="/general" element={<News key="general" pageSize={5} country="in"  category="general"/>}/>
              
              <Route exact path="/business" element={<News key="business" pageSize={5} country="in"  category="business"/>}/>
              
              <Route exact path="/technology" element={<News key="technology"pageSize={5} country="in"  category="technology"/>}/>
              
              <Route exact  path="/entertainment" element={<News  key="entertainment"pageSize={5} country="in"  category="entertainment"/>}/>
              
              
              <Route exact  path="/health" element={<News key="health" pageSize={5} country="in"  category="health"/>}/>
              
              <Route  exact path="/sports" element={<News key="sports" pageSize={5} country="in"  category="sports"/>}/>

          
          </Router>
          </BrowserRouter>
        {/* <News pageSize={5} country="in"  category="general"/> */}
        
      </div>
    );
  }
}
