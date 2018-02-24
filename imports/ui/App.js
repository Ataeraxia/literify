import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Blogs } from "../api/blogs.js";

import Blog from "./Blog.js";
import AddBlogForm from "./components/AddBlogForm.js";

class App extends Component {
    renderBlogs() {
        return this.props.blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
        ))
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>literify</h1>
                </header>

                <AddBlogForm />

                <ul className="sidewalk">
                    {this.renderBlogs()}
                </ul>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        blogs: Blogs.find({}, { sort: { createdAt: -1 }}).fetch(),
    };
})(App);