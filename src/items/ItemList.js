import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class ItemList extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        if (!this.props.items) {
            return;
        }
        if(this.state.viewItem){
            return(
                <Redirect to={'/view/'+this.state.viewItem._id}></Redirect>
            )
        }
        if (this.state.editItem) {
            return (
                <Redirect to={'/edit/' + this.state.editItem._id}></Redirect>
            )
        }
        return (
            <div className="items-panel">
                {
                    this.props.items.map((x, i) => {
                        return (
                            <div className="item" key={i}>
                                <h2 className="title">{x.title}</h2>
                                <img src={x.picture} style={{ width: 120 }} alt="" onClick={this.view.bind(this, x)} />
                                <button className="delete" onClick={this.delete.bind(this, x)}>X</button>
                                <button className="edit" onClick={this.edit.bind(this, x)}>edit</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    edit(item) {
        this.setState({ editItem: item });
    }

    view(item) {
        this.setState({ viewItem: item });
    }

    delete(item) {
        const idx = this.props.items.indexOf(item);
        this.props.items.splice(idx, 1);
        this.forceUpdate();
    }
}