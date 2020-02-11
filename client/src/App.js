import React, { Component } from "react";
import logo from './logo.svg';
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';
import axios from 'axios';
class App extends Component {

  componentDidMount() {
    var houses = axios.get("/api/all");
    console.log(houses);
  }
  render() {

    return (
      <div className="App">
        <Header />
        test app
        <Footer />
      </div>
    );
  }
}

export default App;
