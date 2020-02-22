import React, { Component } from "react";
import logo from './logo.svg';
import Header from "./components/header"; 
//import Subtitle from "./components/subheader"
import Card from "./components/card"; 
//import Input from "./components/input";
import Footer from "./components/footer";
import './App.css';
import axios from 'axios';
class App extends Component {

  state = {
    isRefresh : false,
  }

  Refresh = () =>{
    this.setState({ isRefresh : true });

    setTimeout( ()=>{
      this.setState({ isRefresh : false });
    }, 500);
  }

  render() {

    return (
      <div className="App">
        <div id="bg"></div>
        {/* Sending the function Refresh to the header component */}
        <Header refresh={this.Refresh} /> 

          {this.state.isRefresh ? '' : <Card refresh={this.Refresh} />}
 
        <Footer />
      </div>
    );
  }
}

export default App;
