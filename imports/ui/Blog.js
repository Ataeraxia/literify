import React, { Component } from "react";

export default class Blog extends Component {
    render() {
        return (
            <li>{this.props.blog.title}</li>
        );
    }
}