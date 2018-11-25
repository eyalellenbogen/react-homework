import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavMenu.scss';

export class NavMenu extends Component {
    render() {
        return (
            <div className='nav-menu'>
                <ul>
                    <li>
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <span><i className='fas fa-home'></i> Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            <span><i className='fas fa-plus'></i> Add Item</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>
                            <span><i className='fas fa-info'></i> About</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
