import React, { Component } from "react";

import Modal from 'react-bootstrap/Modal';

import axios from "axios";
import "./card.css";


class Card extends Component {

    state = {
        houses: [],
        shouldModalShow: false,
        shouldEditModalShow: false,
        selectedHouse: '',
        adress: '',
        bath: 0,
        bed: 0,
        price: '',
        author: '',
        id: ''
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

    Edit = (house) => {
        this.setState({ 
            adress: house.adress,
            bath: house.bath,
            bed: house.bed,
            price: house.price,
            author: house.author,
            id: house.id
           });
        this.setState({ shouldEditModalShow : true });
    }

    delete = (house) =>{
        var selectedID = house.id;
        var url = "/api/delete/"+selectedID;

        axios.get(url).then(result => {
            if(result.statusText == "OK"){
                this.props.refresh();
            }
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


      SubmitEdit = () => {
        //   
        var newHouseData = {
          adress: this.state.adress,
          bath: Number(this.state.bath),
          bed: Number(this.state.bed),
          price: Number(this.state.price),
          author: this.state.author,
          id: this.state.id
        }
    
        console.log(newHouseData);
    
        axios.post("/api/edit-house", newHouseData).then(res =>{
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

    render() {
        return (<div className="card-main">
            {this.state.houses.map((house, index) => {
                return (
                    <div className="card-box" key={index}>
                        <div className="card">
                        {this.props.user ? (
                        <span className="close-btn" onClick={() =>{ this.delete(house)}}>x</span>
                        ): ''}
                            <div className="card-content">
                                <div className="media card-box">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-6 adress">{house.adress}</p>
                                        <div className="actions">
                                           {this.props.user ? (
                                                <button className="button is-primary is-rounded action" onClick={() => this.Edit(house)}>Edit</button>
                                           ) : ''}

                                            <button className="button is-primary is-rounded action" onClick={() => this.More(house)}>more</button>
                                        </div>
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
            {/* Detail */}
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
                                <h4> Author: {this.state.selectedHouse.author} </h4>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            ) : ('')}
            {/* Edit for Admin only */}
            {this.state.shouldEditModalShow ? (
                <div>
                    <Modal
                        show={true}
                        onHide={() => (this.setState({ shouldEditModalShow: false }))}
                        dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {/* <img src={this.state.selectedHouse.image} width="150px" height="150px" alt="house img" /> */}
                                <h4><input type="number"  name='bed' onChange={this.HandleChange} value={this.state.bed}/> Beds </h4>
                                <h2><input type="number"  name='bath' onChange={this.HandleChange} value={this.state.bath} />Bath </h2>
                                <h3>$<input type="number"  name='price' onChange={this.HandleChange} value={this.state.price} /></h3>
                                <h4><input type="text"  name='adress' onChange={this.HandleChange} value={this.state.adress} /></h4>
                                <h4>Author: <input type="text"  name='author' onChange={this.HandleChange} value={this.state.author} /></h4>
                                <button onClick={this.SubmitEdit}>Save Changes</button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            ) : ('')}
        </div>)
    }
}

export default Card;