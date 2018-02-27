import React, { Component } from "react";

import { Blogs } from "../../api/blogs.js";

export default class FullBlog extends Component {
    deleteBlog() {
        Blogs.remove(this.props.blog._id);
    }

    render() {
        return (
            <li className="tile">
                <div>
                    <div className="blog-head">
                        <h2>
                            {this.props.blog.title}
                        </h2>

                        <h4>
                            {this.props.blog.createdAt.toDateString()}
                        </h4>
                    </div>

                    <p>
                        {this.props.blog.body}
                    </p>

                    <button onClick={this.deleteBlog.bind(this)}>
                        &times;
                    </button>
                </div>
            </li>
        );
    }
}