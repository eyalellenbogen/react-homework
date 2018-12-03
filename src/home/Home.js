import React, { Component } from "react";
import { ItemList } from "../items/ItemList";

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: this.getFeaturedItems(props.items) };
    }

    getFeaturedItems(items) {
        return items
            .sort((a, b) => { return Math.ceil(Math.random() * 2) - 1 ? 1 : -1; })
            .slice(0, 3);
    }

    render() {
        return (
            <div className="home-page">

                <h1>
                    Welcome
                </h1>
                <h3>To my useless portfolio</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam id voluptatum numquam doloremque hic nesciunt necessitatibus expedita minima debitis veritatis neque iure autem, voluptas at ducimus repellat facilis corrupti vero.
                </p>

                <ItemList {...this.props} items={this.state.items}></ItemList>
            </div>
        );
    }
}