import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export class ContactPage extends Component {
    constructor(props) {
    super(props);
        this.state = { dirty: false };
    }
    render() {
        return (
            <div className='contact-page'>
                <h2>Contact us</h2>
                <form noValidate onSubmit={e => this.handleSubmit(e)}>
                    <Prompt
                        when={this.state.dirty}
                        message={location =>
                            `Are you sure you want to go to ${location.pathname}`
                        }
                    />
                    <div className='form-group'>
                        <label>Subject</label>
                        <input type='text' className='form-control' onChange={this.handleChange.bind(this)} />
                    </div>
                    <div className='form-group'>
                        <label>Your message</label>
                        <textarea name='message' className='form-control' onChange={this.handleChange.bind(this)}></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Send
                    </button>
                </form>
            </div>
        )
    }

    handleChange() {
        this.setState({ dirty: true });
    }

    handleSubmit(e) {
        e.preventDefault();
        // do stuff
    }
}