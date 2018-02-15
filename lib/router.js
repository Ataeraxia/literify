import React from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from 'react-mounter';

import Blog from "../imports/ui/Blog.js";
import AppContainer from '../imports/ui/containers/AppContainer.js';
import App from "../imports/ui/App.js";

FlowRouter.route('/blog', {
    name: 'Blogs',
    action(params, queryParams) {
        console.log("Inside the blog route!");
        App.renderSidewalk();
    }
})

FlowRouter.route('/blog/:postId', {
    name: 'Blogs.show',
    action(params, queryParams) {
        console.log("Inside the blog id route: "+params.postId);
        mount(AppContainer, {
            main: <div />,
        });
    }
});