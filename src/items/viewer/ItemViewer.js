import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class ItemViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    render(props) {
        if (this.state.back) {
            return (
                <Redirect to="/"></Redirect>
            )
        }
        return (
            <div className="item-view">
                <img src={this.props.item.picture} alt="" />
                <div className="info">
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.description}</p>
                    <button className="btn btn-primary" onClick={this.goBack.bind(this)}>Back</button>
                </div>
            </div>
        )
    }

    goBack() {
        this.setState({ back: true })
    }
}