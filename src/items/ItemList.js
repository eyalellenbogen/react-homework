import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                                        <div className='actions'>
                                            <button className='edit' onClick={e => this.edit(x, e)}>
                                                <i className='fas fa-edit'></i>
                                            </button>
                                            <button className='delete' onClick={e => this.delete(x, e)}>
                                                <i className='fas fa-trash'></i>
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