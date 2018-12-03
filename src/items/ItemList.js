import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPrice } from '../shared/Utils';

import './ItemList.scss';

export class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    render() {
        if (!this.state.items) {
            return;
        }
        return (
            <div className='items-panel clearfix'>
                {
                    this.state.items.map((x, i) => {
                        return (
                            <div className='item' key={i} >
                                <div className='item-view' onClick={this.view.bind(this, x)}
                                    style={{ backgroundImage: 'url(' + x.picture + ')' }} >
                                    <div className='item-info'>
                                        <h2 className='title'>{x.title}</h2>
                                        <p className='desc'>{x.description}</p>
                                    </div>
                                    <div className="price">
                                        <h2>{getPrice(x.price)}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    view(item) {
        this.props.history.push('/products/' + item._id);
    }

    delete(item, event) {
        event.preventDefault();
        event.stopPropagation();
        const idx = this.state.items.indexOf(item);
        this.state.items.splice(idx, 1);
        this.setState({ items: this.state.items })
    }
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        picture: PropTypes.string,
        _id: PropTypes.string
    }))
}