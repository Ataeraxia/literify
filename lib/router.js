import React from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from 'react-mounter';

import { Blogs } from "../imports/api/blogs.js";

import Appshell from "../imports/ui/Appshell.js";
import Blog from "../imports/ui/Blog.js";
import AddBlogForm from "../imports/ui/components/AddBlogForm.js";
import BlogsIndex from "../imports/ui/components/BlogsIndex.js"
import FullBlog from "../imports/ui/components/FullBlog.js";

FlowRouter.route('/', {
    name: 'Home',
    action(params, queryParams) {
        mount(Appshell, {
            content: <BlogsIndex />
        });
    }
});

FlowRouter.route('/new', {
    name: 'New.Blog',
    action() {
        mount(Appshell, {
            content: <AddBlogForm />
        });
    }
});

FlowRouter.route('/blogs/:postId', {
    name: 'Show.Blog',
    action(params, queryParams) {
        const theId = params.postId;
        console.log(theId);
        const blog = Blogs.find({
            "_id": "tbJ9aesG99u2rRyYP",
        });
        console.log(blog)
        mount(Appshell, {
            content: <FullBlog key={blog._id} blog={blog}/>
        });
    }
})

// ._docs._map[queryParams].title