import React, { Component } from "react";
import axios from "axios";
class Card extends Component {

    state = {
        houses: []
    }

    componentDidMount() {
        var hses = axios.get("/api/all").then(result => {
            console.log(result);
            this.setState({ houses: result.data });
        });
    }

    add = (house) => {
        console.log("click: ", house);
    }

    render() {
        return (<div>
            {this.state.houses.map((house, index) => {
                return (
                    <div key={index}>
                        <div class="card">
                            {/* <div class="card-image">
                                <div class="image is-4by3 is-48x48">
                                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                </div>
                            </div> */}
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                        </div>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4">{house.adress}</p>
                                        <p class="subtitle is-6">Bed: {house.bed}</p>
                                        <button onClick={() => this.add(house)}>Add</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>)
    }
}

export default Card;