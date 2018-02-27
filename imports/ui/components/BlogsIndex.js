import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Blogs } from "../../api/blogs.js";

import Blog from "../Blog.js";

class BlogsIndex extends Component {
    renderBlogs() {
        return this.props.blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
        ));
    }

    render() {
        return (
            <ul className="sidewalk">
                {this.renderBlogs()}
            </ul>
        );
    }
}

export default withTracker(() => {
    return {
        blogs: Blogs.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(BlogsIndex);