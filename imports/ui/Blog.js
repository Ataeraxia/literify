import React, { Component } from "react";

import { Blogs } from "../api/blogs.js";

export default class Blog extends Component {
    punctuation(text) {
        if(text && text.length > 250){
            return "...";
        } else {
            return "";
        }
    }

    deleteBlog() {
        Blogs.remove(this.props.blog._id);
    }

    render() {
        return (
            <li className="tile">
                <div>
                    <h2>
                        {this.props.blog.title}
                    </h2>

                    <p>
                        {this.props.blog.body.substring(0,250)}{this.punctuation(this.props.blog.body)}
                    </p>

                    <button onClick={this.deleteBlog.bind(this)}>
                        &times;
                    </button>
                </div>
            </li>
        );
    }
}