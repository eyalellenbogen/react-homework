import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class SideMenu extends Component {
    render() {
        return (
            <div className="side-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Item</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
