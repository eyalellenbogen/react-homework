import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getPrice } from '../shared/Utils';

import './NavMenu.scss';

export class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn,
            totalCart: props.totalCart || 0,
            onLoggedOut: props.onLoggedOut
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // do things with nextProps.someProp and prevState.cachedSomeProp
        return {
            isLoggedIn: nextProps.isLoggedIn,
            totalCart: nextProps.totalCart || 0
        };
    }

    render() {
        const cartOrLoginTemplate = this.state.isLoggedIn
            ? (
                <React.Fragment>
                    <li className='sep'>
                        <NavLink to='/cart' activeClassName='active'>
                            <span><i className='fas fa-shopping-cart'></i> Cart ({getPrice(this.state.totalCart)})</span>
                        </NavLink>
                    </li>
                    <li className='sep1'>
                        <button className='logout' onClick={this.props.onLoggedOut}>
                            <span><i className='fas fa-sign-out-alt'></i> Logout</span>
                        </button>
                    </li>
                </React.Fragment>
            )
            : (
                <li className='sep'>
                    <NavLink to='/login' activeClassName='active'>
                        <span><i className='fas fa-sign-in-alt'></i> Login</span>
                    </NavLink>
                </li>
            );
        return (
            <div className='nav-menu'>
                <ul>
                    <li>
                        <NavLink to='/' exact={true} activeClassName='active'>
                            <span><i className='fas fa-home'></i> Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' activeClassName='active'>
                            <span><i className='fas fa-images'></i> Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>
                            <span><i className='fas fa-info'></i> About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName='active'>
                            <span><i className='fas fa-at'></i> Contact</span>
                        </NavLink>
                    </li>
                    {cartOrLoginTemplate}
                </ul>
            </div >
        );
    }

}
