import React, { Component } from "react";
import logo from "./logo.png";
import "./header.css";
import Modal from "react-bootstrap/Modal"; 
class Header extends Component {

  state = {
    isAddHouse: false
  }

  Add = () => {
    console.log("click"); 
    this.setState({isAddHouse : true});
  }

  render() {
    return (
      <div className="header-block">
        <div className="header">
          <h1 className="welcome"> PROPERTY FOR RENT </h1>
          <img src={logo} className="logo" />
        </div>

        <button class="button is-primary is-rounded navbutton" onClick={this.Add}> Add</button>

                  {/* Add new house */}
                  {this.state.isAddHouse ? (
                <div>
                    <Modal
                        show={true}
                        onHide={() => (this.setState({ isAddHouse: false }))}
                        dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                open
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
