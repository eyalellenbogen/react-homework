import React, { Component } from "react";
export class ItemEditor extends Component {



    constructor(props) {
        super(props);

        this.titleRef = React.createRef();
        this.pictureRef = React.createRef();
        this.descriptionRef = React.createRef();

        this.state = { item: props.item };
    }
    render() {
        return (
            <form noValidate onSubmit={this.commitChanges.bind(this)}>
                <div className={"form-group " + (!this.titleRef.current || this.titleRef.current.validity.valid ? '' : 'invalid')} >
                    <label htmlFor="title">Title</label>
                    <input ref={this.titleRef} onChange={this.handleFormChange.bind(this)} name="title" value={this.state.item.title} required type="text" className="form-control" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="picture">Image URL</label>
                    <input ref={this.pictureRef} onChange={this.handleFormChange.bind(this)} name="picture" value={this.state.item.picture} required pattern="^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea ref={this.descriptionRef} onChange={this.handleFormChange.bind(this)} name="description" type="text" className="form-control"></textarea>
                </div> */}

                <button type="submit">Save</button>
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
    }

    isInvalid(input) {
        return Object.keys(input.valid)
    }
}