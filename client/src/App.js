import React, { Component } from "react";
import logo from './logo.svg';
import Header from "./components/header"; 
//import Subtitle from "./components/subheader"
import Card from "./components/card"; 
import Modal from "react-bootstrap/Modal";
import Footer from "./components/footer";
import './App.css';
import axios from 'axios';
class App extends Component {

  state = {
    isRefresh : false,
    username: '',
    userpassword: '',
    wrongUserInfo: false,
    user: false,
    isLogin: false
  }

  


  Refresh = () =>{
    this.setState({ isRefresh : true });

    setTimeout( ()=>{
      this.setState({ isRefresh : false });
    }, 500);
  }

  Login = ()=>{
    this.setState({ isLogin : true });
  }

  Logout = () =>{
    this.setState({ user: null });
  }

  Submit = ()=>{
   
    var userData = {
      username: this.state.username,
      userpassword: this.state.userpassword
    }

    axios.post("/api/login", userData).then((res)=>{
      console.log("userInfo: ", res);
      if(res.data == null){
        this.setState({ wrongUserInfo : true });
      } else{
        this.setState({ user: res.data });
        this.setState({ isLogin : false });
      }
      this.setState({
        username: '',
        userpassword: ''
      })
    })
  }

  HandleChange = event =>{
    // console.log(event.target.name);
    var name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value
    })

  }

  render() {
    return (
      <div className="App">
        <div id="bg"></div>
        {/* Sending the function Refresh to the header component */}
        <Header user={this.state.user} refresh={this.Refresh} /> 
        <div className="log-action">
        {this.state.user ? (
            <button className="button is-primary is-rounded action" onClick={this.Logout}>Logout</button>
        ) : (
          <div>
            {this.state.isLoading ? '' : (
            <button className="button is-primary is-rounded action" onClick={this.Login}>Login</button>
            )}
          </div>
        )}
        </div>
        
        {this.state.isRefresh ? '' : 
        <div className="houses-list">
        <Card  user={this.state.user} refresh={this.Refresh} />
        </div>
        }
        <div className="footer-part">
          <Footer  user={this.state.user} />
        </div>

        {this.state.isLogin ? (
          <div>
          <Modal
              show={true}
              onHide={() => (this.setState({ isLogin: false }))}
              dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
              <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                      Login
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div>
                    <p className="new-h-label">Username:</p>
                    <input className="new-h-input" type="text" name="username" onChange={this.HandleChange} value={this.state.username} />
                    <p className="new-h-label">Password:</p>
                    <input className="new-h-input" type="password" name="userpassword" onChange={this.HandleChange} value={this.state.userpassword} />  
                    <button onClick={this.Submit}>Submit</button>
                    {this.state.wrongUserInfo ? (
                    <span style={{color: "red"}}>Wrong username/password</span>
                    ): ''}
                  </div>
              </Modal.Body>
          </Modal>
      </div>
        ) : ''}
      </div>
    );
  }
}

export default App;
