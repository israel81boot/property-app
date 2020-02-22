import React, { Component } from "react";

import Modal from 'react-bootstrap/Modal';

import axios from "axios";
import "./card.css";


class Card extends Component {

    state = {
        houses: [],
        shouldModalShow: false,
        selectedHouse: ''
    }

    componentDidMount() {
        var hses = axios.get("/api/all").then(result => {
            console.log(result);
            this.setState({ houses: result.data });
        });
    }

    More = (house) => {
        this.setState({ selectedHouse: house });
        this.setState({ shouldModalShow: true });
    }

    render() {
        return (<div className="card-main">
            {this.state.houses.map((house, index) => {
                return (
                    <div className="card-box" key={index}>

                        <div class="card">
                            {/* <div class="card-image">
                                <figure class="image is-4by3 is-150x150">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                </figure>
                            </div> */}
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-6">{house.adress}</p>

                                        <button class="button is-primary is-rounded" onClick={() => this.More(house)}>more</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            {/* pour que le modal soit vu il faut cettte fonction ?(remplacant di if en ES6) ():('') 
                    Si this.state.shouldModalShow = true donc on execute la premiere partie du code entre parenthese. Sinon la deuxiem partie
            */}
            {this.state.shouldModalShow ? (
                <div>
                    <Modal
                        show={true}
                        onHide={() => (this.setState({ shouldModalShow: false }))}
                        dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {/* <img src={this.state.selectedHouse.image} width="150px" height="150px" alt="house img" /> */}
                                <h1>   {this.state.selectedHouse.bed}Beds </h1>
                                <h2> {this.state.selectedHouse.bath}Bath </h2>
                                <h3>  ${this.state.selectedHouse.price} </h3>
                                <h4> {this.state.selectedHouse.adress} </h4>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            ) : ('')}
        </div>)
    }
}

export default Card;