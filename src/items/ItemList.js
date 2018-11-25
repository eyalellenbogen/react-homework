import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./ItemList.scss";

export class ItemList extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        if (!this.props.items) {
            return;
        }
        return (
            <div className="items-panel">
                {
                    this.props.items.map((x, i) => {
                        return (
                            <div className="item" key={i} >
                                <div className="item-view" onClick={this.view.bind(this, x)}
                                    style={{ backgroundImage: "url(" + x.picture + ")" }} >
                                    <div className="item-info">
                                        <h2 className="title">{x.title}</h2>
                                        <div className="actions">
                                            <button className="edit" onClick={e => this.edit(x, e)}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="delete" onClick={e => this.delete(x, e)}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    edit(item, event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push('/edit/' + item._id);
    }

    view(item) {
        this.props.history.push('/view/' + item._id);
    }

    delete(item, event) {
        event.preventDefault();
        event.stopPropagation();
        const idx = this.props.items.indexOf(item);
        this.props.items.splice(idx, 1);
        this.forceUpdate(); // yeah yeah whatever
    }
}