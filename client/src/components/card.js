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

    More = (house) => {
        console.log("click: ", house);
    }

    render() {
        return (<div>
            {this.state.houses.map((house, index) => {
                return (
                    <div key={index}>
                        
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
                
                                        <button class= "button is-primary is-rounded" onClick={() => this.More(house)}>more</button>
                                      
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