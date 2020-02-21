import React, { Component } from "react";
import "./header.css";

class Header extends Component {

  render() {
    return (
      <div className="header-block"> 
       <div className="header">
         
            <h1 className="welcome"> PROPERTY FOR RENT </h1>
          </div>  
        
         <button class="button is-primary is-rounded navbutton"> Add</button> 
          
      </div> 
     
)
  }
}
export default Header;
