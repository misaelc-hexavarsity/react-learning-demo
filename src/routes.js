import React from "react";
import { withRouter } from "react-router";
import {
	Switch,
	Route,
	Redirect
  } from "react-router-dom";

import Users from "./views/Users";
import Create from "./views/Create";
import NotFound from "./views/NotFound";

class Routes extends React.Component {
	render() {
		return(
			<Switch>
              <Route exact path="/users" component={Users} />
              <Route exact path="/create" component={Create} />
              <Route exact path="/create/:id" component={Create} />
              <Route exact path="/not-found" component={NotFound} />
              <Redirect exact from="/" to="/users" />
              <Redirect from="*" to="/not-found" />
            </Switch>
		);
	}
}

export default withRouter(Routes);
