import React, { Component } from "react";
import "./header.css";

class Header extends Component {

  render() {
    return (
      <div className="header-block">
          <nav class="navbar" role="navigation" aria-label="main navigation">
           <div class="navbar-brand"> 
           <div className="header">
            <h1> welcome to property </h1>
          </div>  
          </div> 
          </nav> 
           
        <button class="button is-primary is-rounded"> Add</button>
      </div> 
  
)
  }
}
export default Header;
