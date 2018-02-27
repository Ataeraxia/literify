import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FlowRouter } from "meteor/kadira:flow-router";

import { Blogs } from "../../api/blogs.js";

export default class AddBlogForm extends Component {
    handleSubmit(event) {
        event.preventDefault();

        const title = ReactDOM.findDOMNode(this.refs.titleTextInput).value.trim();

        const body = ReactDOM.findDOMNode(this.refs.bodyTextArea).value.trim();

        Blogs.insert({
            title,
            body,
            createdAt: new Date(),
        });

        ReactDOM.findDOMNode(this.refs.titleTextInput).value = '';

        ReactDOM.findDOMNode(this.refs.bodyTextArea).value = '';

        FlowRouter.go('Home');
    }
    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        type="text"
                        ref="titleTextInput"
                        placeholder="Title"
                    />
                    <textarea ref="bodyTextArea"/>
                    <input
                        type="submit"
                        value="Post"
                    />
                </form>
            </div>
        );
    }
}