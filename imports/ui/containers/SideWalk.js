import React, { Component } from "react";

import { blogData } from "../blogData.js";
import Blog from "../Blog.js";

export default class SideWalk extends Component {
    renderBlogs() {
        return blogData.map((blog) => (
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