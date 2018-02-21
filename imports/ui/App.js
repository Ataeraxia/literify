import React, { Component } from "react";

import Blog from "./Blog.js";
import { allstar } from "./allstar.js";
import { URL } from "url";

export default class App extends Component {
    getBlogs() {
        return [
            {
                _id: 0, title: 'This is the 0th blog post', body: allstar},
            { _id: 1, title: 'This is the 1st blog post', body: allstar},
            { _id: 2, title: 'This is the 2nd blog post', body: allstar}
        ];
    }

    renderBlogs() {
        return this.getBlogs().map((blog) => (
            <Blog key={blog._id} blog={blog} />
        ));
    }

    renderSidewalk() {
        return (
            <ul className="sidewalk">
                {this.renderBlogs()}
            </ul> 
        );
    }

    render() {
        return (
            <div className="container">
                
                {this.renderSidewalk()}
            </div>
        );
    }

}

/* <ul className="sidewalk">
                    {this.renderBlogs()}
                </ul> */