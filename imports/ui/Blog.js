import React, { Component } from "react";

export default class Blog extends Component {
    render() {
        return (
            <li className="tile">
                <div>
                    <h2>
                        {this.props.blog.title}
                    </h2>

                    <p>
                        {this.props.blog.body}
                    </p>
                </div>
            </li>
        );
    }
}