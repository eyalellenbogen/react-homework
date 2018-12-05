import React from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../../shared/Utils';
export function CartItem(props) {
    return (
        <div className='item' >
            <div className='item-view'
                style={{ backgroundImage: 'url(' + props.target.item.picture + ')' }} >
                <div className='item-info'>
                    <h2 className='title'>{props.target.item.title}</h2>

                    <div className='actions d-flex flex-row justify-content-center align-items-center'>
                        <button className='delete' onClick={e => props.removeItem(props.target.item)}>
                            <i className='fas fa-minus'></i>
                        </button>
                        <strong className='ml-2 mr-2'>{props.target.count}</strong>
                        <button className='edit' onClick={e => props.addItem(props.target.item)}>
                            <i className='fas fa-plus'></i>
                        </button>
                    </div>
                </div>
                <div className='price'>
                    <h2>{getPrice(props.target.item.price)}</h2>
                    <h4>{getPrice(props.target.item.price * props.target.count)}</h4>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        picture: PropTypes.string,
        _id: PropTypes.string
    })
};