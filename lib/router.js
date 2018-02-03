import React from 'react';
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from 'react-mounter';

import Blog from "../imports/ui/Blog.js";
import AppContainer from '../imports/ui/containers/AppContainer.js';

FlowRouter.route('/blog/:postId', {
    name: 'Blogs.show',
    action(params, queryParams) {
        mount(AppContainer, {
            main: <SidewalkPageContainer />,
        });
    }
});