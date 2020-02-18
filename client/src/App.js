import React, { Component } from "react";
import logo from './logo.svg';
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import './App.css';
import axios from 'axios';
class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
          <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
