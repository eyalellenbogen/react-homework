import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../shared/Utils';
import './ItemViewer.scss';

export class ItemViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            isLoggedIn: props.isLoggedIn
        };

    }
    render(props) {
        const button = this.state.isLoggedIn
            ? (
                <button className='btn btn-primary mr-2' onClick={this.add.bind(this)}>
                    <i className='fas fa-plus'></i> Add to Cart
                </button>
            ) : null;
        return (
            <div className='item-view'>
                <img src={this.state.item.picture} alt='' />
                <div className='info'>
                    <h2>{this.state.item.title}</h2>
                    <h4>{getPrice(this.state.item.price)}</h4>
                    <p>{this.state.item.description}</p>
                    {button}

                </div>
            </div>
        )
    }

    add() {
        this.props.addItem(this.state.item);
        this.props.history.push('/cart');
    }

    goBack() {
        this.props.history.push('/');
    }
}


ItemViewer.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        picture: PropTypes.string,
        _id: PropTypes.string
    })
}