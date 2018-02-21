import React from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from 'react-mounter';

import Blog from "../imports/ui/Blog.js";
import AppContainer from '../imports/ui/containers/AppContainer.js';
import App from "../imports/ui/App.js";
import SideWalk from "../imports/ui/containers/SideWalk.js";

const MainLayout = ({ content }) => (
  <p>Hello World! {content}</p>        
);

FlowRouter.route('/', {
    name: 'index',
    action(params, queryParams){
        mount(SideWalk, {});
    }
    //render(<App />, document.getElementById('render-target'));
})


FlowRouter.route('/blog', {
    name: 'Blogs',
    action(params, queryParams) {
        console.log("Inside the blog route!");
        // Display all the blogs, but shortened
    }
})


FlowRouter.route('/blog/:postId', {
    name: 'Blogs.show',
    action(params, queryParams) {
        console.log("Inside the blog id route: "+params.postId);
        mount(Blog, {
        });
        // Display the blog that belongs to the :postId, and none of the other blogs. Display the whole blog.
        mount(MainLayout, {
            content: 'jess'
        });
    }
});