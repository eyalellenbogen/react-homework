import React, { Component } from 'react';
import PropTypes from "prop-types";
import './ItemViewer.scss';

export class ItemViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { item: this.props.item };

    }
    render(props) {
        return (
            <div className='item-view'>
                <img src={this.state.item.picture} alt='' />
                <div className='info'>
                    <h2>{this.state.item.title}</h2>
                    <p>{this.state.item.description}</p>
                    <div className='d-flex flex-row justify-content-between'>
                        <button className='btn btn-link' onClick={this.goBack.bind(this)}>
                            <i className='fas fa-chevron-left mr-2'></i>
                            Back</button>
                        <button className='btn btn-success mr-2' onClick={this.edit.bind(this)}>
                            <i className='fas fa-edit mr-2'></i>
                            Edit</button>
                    </div>
                </div>
            </div>
        )
    }

    edit() {
        this.props.history.push('/edit/' + this.state.item._id);
    }

    goBack() {
        this.props.history.push('/');
    }
}


ItemViewer.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        picture: PropTypes.string,
        _id: PropTypes.string
    })
}