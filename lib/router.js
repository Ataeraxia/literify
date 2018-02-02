import React from 'react';
import { mount } from 'react-mounter';
import Blog from "../imports/ui/Blog.js";

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        mount(Blog.prototype.render({_id: "1", title: "test", body: "testbody"}));
    }
});