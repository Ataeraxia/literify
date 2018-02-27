import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Blogs } from "../api/blogs.js";

import Blog from "./Blog.js";
import AddBlogForm from "./components/AddBlogForm.js";

export default class Appshell extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>
                        <a href="/">literify</a>
                    </h1>

                    <a href="/new" className="navlink">New Blog</a>
                </header>

                {this.props.content}
            </div>
        );
    }
}