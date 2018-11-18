import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export class ItemEditor extends Component {
    constructor(props) {
        super(props);

        this.state = { submitted: false };

        this.titleRef = React.createRef();
        this.pictureRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.formRef = React.createRef();

        const item = this.props.item || {};
        this.state.item = {
            _id: item._id,
            title: item.title || '',
            description: item.description || '',
            picture: item.picture || ''
        };
    }
    render() {
        if (this.state.done) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <form ref={this.formRef} noValidate onSubmit={this.commitChanges.bind(this)} className={this.state.submitted ? 'was-validated' : ''}>
                <div className={"form-group " + (!this.titleRef.current || this.titleRef.current.validity.valid ? '' : 'invalid')} >
                    <label htmlFor="title">Title</label>
                    <input ref={this.titleRef} onChange={this.handleFormChange.bind(this)} name="title" value={this.state.item.title} required type="text" className="form-control" />
                </div>
                <div className={"form-group " + (!this.pictureRef.current || this.pictureRef.current.validity.valid ? '' : 'invalid')} >
                    <label htmlFor="picture">Image URL</label>
                    <input ref={this.pictureRef} onChange={this.handleFormChange.bind(this)} name="picture" value={this.state.item.picture} required pattern="^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea ref={this.descriptionRef} onChange={this.handleFormChange.bind(this)} name="description" type="text" className="form-control"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
                <button className="ml-2 btn btn-light" onClick={this.cancel.bind(this)}>Cancel</button>
            </form>
        )
    }

    handleFormChange(event) {
        const p = event.target.name;
        const item = this.state.item;
        item[p] = event.target.value;
        this.setState({ item });
    }

    commitChanges(ev) {
        ev.preventDefault();

        if (!this.formRef.current.checkValidity()) {
            this.setState({ submitted: true });
            return;
        }
        // Object.assign(this.props.item, this.state.item);
        this.props.onUpdate(this.state.item);
        this.setState({ done: true });
    }

    cancel() {
        this.setState({ done: true });
    }
}