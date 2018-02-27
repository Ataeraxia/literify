import React, { Component } from "react";
import { FlowRouter } from "meteor/kadira:flow-router";

import { Blogs } from "../api/blogs.js";

export default class Blog extends Component {
    constructor(){
        super();
        this.setFullBlog = this.setFullBlog.bind(this);
        this.renderBlogBody = this.renderBlogBody.bind(this);
        this.goToPage = this.goToPage.bind(this);
        this.state = {isFull: false};
    }

    punctuation(text) {
        if(text && text.length > 250){
            return "...";
        } else {
            return "";
        }
    }

    renderBlogBody(){
        if(this.state.isFull){
            return this.props.blog.body;
        } else {
            return "" + this.props.blog.body.substring(0, 250) + this.punctuation(this.props.blog.body); 
        }
    }

    setFullBlog() {
        if(this.state.isFull == true) {
            this.setState({
                isFull: false
            });
        } else {
            this.setState({
                isFull: true
            });
        }
    }

    goToPage() {
        FlowRouter.go('Show.Blog', { postId: this.props.blog._id});
    }

    deleteBlog() {
        Blogs.remove(this.props.blog._id);
    }

    render() {
        return (
            <li className="tile" onClick={this.goToPage}>
                <div >
                    <div className="blog-head">
                        <h2>
                            {this.props.blog.title}
                        </h2>

                        <h4>
                            {this.props.blog.createdAt.toDateString()}
                        </h4>
                    </div>

                    <p>
                        {this.renderBlogBody()}
                    </p>

                    <button onClick={this.deleteBlog.bind(this)}>
                        &times;
                    </button>
                </div>
            </li>
        );
    }
}