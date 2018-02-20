import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from "react-dom";
import { FlowRouter } from "meteor/kadira:flow-router";

import App from "../imports/ui/App.js";
import BrandNav from "../imports/ui/containers/BrandNav.js";

Meteor.startup(() => {
  render(<BrandNav />, document.getElementById('render-target'));
});