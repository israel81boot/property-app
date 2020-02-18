import React, { Component } from "react";
import axios from "axios";
class Card extends Component {

    state = {
        houses: []
    }

    componentDidMount() {
        var hses = axios.get("/api/all").then(result =>{
            return result;
        });
        console.log(hses);
        this.setState({ houses : hses});
      }

    render() {
        return (<div>
            <div class="card">
                <div class="card-image">
                    <div class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </div>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <div class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </div>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                    <a>@bulmaio</a>.
                    <a href="#">#css</a>
                        <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Card;