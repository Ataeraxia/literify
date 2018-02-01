import React, { Component } from "react";

import Blog from "./Blog.js";

export default class App extends Component {
    getBlogs() {
        return [
            { _id: 0, title: 'This is the 0th blog post'},
            { _id: 1, title: 'This is the 1st blog post'},
            { _id: 2, title: 'This is the 2nd blog post'}
        ];
    }

    renderBlogs() {
        return this.getBlogs().map((blog) => (
            <Blog key={blog._id} blog={blog} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>literify</h1>
                </header>

                <ul>
                    {this.renderBlogs()}
                </ul>
            </div>
        );
    }
}