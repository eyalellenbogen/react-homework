import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class SideMenu extends Component {
    render() {
        return (
            <div className="side-menu">
                <ul>
                    <li>
                       
                        <Link to="/"><i className="fas fa-home"></i> Home</Link>
                    </li>
                    <li>
                        <Link to="/add"><i className="fas fa-plus"></i> Add Item</Link>
                    </li>
                    <li>
                        <Link to="/about"><i className="fas fa-info"></i> About</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
