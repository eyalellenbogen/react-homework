import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CartItem } from './cart-item/CartItem';

import './Cart.scss';

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Object.keys(props.items).map(x => props.items[x]),
            addItem: props.addItem,
            removeItem: props.removeItem
        }
    }

    componentDidUpdate(prevProps) {
        // since array is mapped we need to check if it has changed
        const prevStr = Object.keys(prevProps.items).map(x => prevProps.items[x].item._id).join(',');
        const curStr = this.state.items.map(x => x.item._id).join(',');
        if (prevStr !== curStr) {
            this.setState({ items: Object.keys(this.props.items).map(x => this.props.items[x]) });
        }
    }

    render() {
        if (!this.state.items || !this.state.items.length) {
            return (
                <div className="cart-panel empty">
                    <h1>Your cart is empty</h1>
                    <img src="http://pluspng.com/img-png/uncle-sam-i-want-you-png-uncle-sam-hat-stars-usa-america-uncle-sam-hat-709.png" alt="" />
                    <h3>
                        Go buy my stuff!
                    </h3>
                </div>
            )
        }
        return (
            <div className='items-panel cart-panel clearfix'>
                <h1>Your Cart</h1>
                {
                    this.state.items.map((x, i) => {
                        return (
                            <CartItem key={x.item._id} target={x} addItem={this.props.addItem} removeItem={this.props.removeItem}></CartItem>
                        )
                    })
                }
            </div>
        )
    }
}
Cart.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        picture: PropTypes.string,
        price: PropTypes.number,
        _id: PropTypes.string
    }))
}