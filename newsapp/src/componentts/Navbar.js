
import React, { Component } from 'react'

export default class Navbar
 extends Component {
  render() {
    return (
      <div>
<nav className="navbar navbar-expand-md bg-body-tertiary">      <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/Home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/entertainmnet">Entertainment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/bussiness">Bussiness</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/technology">Technology</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/sports">Sport</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/health">Health</a>
      </li>
    </ul>
  </div>
</nav>
      {/* <nav class="navbar navbar-expand bg-body-tertiary">
        <div class="container-fluid">
        </div>
      </nav> */}

      </div>
    )
  }
}

