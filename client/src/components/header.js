import React, { Component } from "react";
import "./header.css";

class Header extends Component {

    render() {
    return(
        <div className="header-block">  
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <h1> welcome to property </h1> 
  <button class="button is-primary is-rounded"> Add</button>
  </div>
</nav>
  </div>
)
}
} 
export default Header;
