import React, { Component } from "react";
import logo from './logo.svg';
import Header from "./components/header"; 
import Subheader from "./components/subheader"
import Card from "./components/card"; 
//import Input from "./components/input";
import Footer from "./components/footer";
import './App.css';
import axios from 'axios';
class App extends Component {

  render() {

    return (
      <div className="App">
        <div id="bg"></div>
        <Header /> 
        <Subheader />
          <Card /> 
 
        <Footer />
      </div>
    );
  }
}

export default App;
