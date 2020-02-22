import React, { Component } from "react";
import logo from "./logo.png";
import "./header.css";
import Modal from "react-bootstrap/Modal"; 
import axios from "axios";

class Header extends Component {

  state = {
    isAddHouse: false,
    adress: '',
    bath: 0,
    bed: 0,
    price: '',
    author: ''
  }

  // componentDidMount(){
    
  // }

  Add = () => {
    console.log("click"); 
    this.setState({isAddHouse : true});
  }

  Submit = () => {
    var newHouseData = {
      adress: this.state.adress,
      bath: Number(this.state.bath),
      bed: Number(this.state.bed),
      price: Number(this.state.price),
      author: this.state.author
    }

    console.log(newHouseData);

    axios.post("/api/new-house", newHouseData).then(res =>{
      if(res.statusText == "OK"){
        this.props.refresh();
        this.setState({
          adress: '',
          bath: 0,
          bed: 0,
          price: '',
          author: '',
          isAddHouse: false
        });
      }
      console.log(res);
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
      <div className="header-block">
        <div className="header">
          <img src={logo} className="logo" />
          <h1 className="welcome"> PROPERTY FOR RENT </h1>
        </div>

        <button className="button is-primary is-rounded navbutton" onClick={this.Add}> Add</button>

                  {/* Add new house */}
                  {this.state.isAddHouse ? (
                <div>
                    <Modal
                        show={true}
                        onHide={() => (this.setState({ isAddHouse: false }))}
                        dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                New House
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                              <p className="new-h-label">Adress:</p>
                              <input className="new-h-input" type="text" name="adress" onChange={this.HandleChange} value={this.state.adress} />
                              <p className="new-h-label">Number of Bathroom:</p>
                              <input className="new-h-input" type="number" name="bath" onChange={this.HandleChange} value={this.state.bath} />  
                              <p className="new-h-label">Number of Bedroom:</p>
                              <input className="new-h-input" type="number" name="bed" onChange={this.HandleChange} value={this.state.bed} /> 
                              <p className="new-h-label">Price:</p>
                              <input className="new-h-input" type="number" name="price" onChange={this.HandleChange} value={this.state.price} /> 
                              <p className="new-h-label">Author:</p>
                              <input className="new-h-input" type="text" name="author" onChange={this.HandleChange} value={this.state.author} />
                              <button onClick={this.Submit}>Submit</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            ) : ('')}
      </div>

    )
  }
}
export default Header;
