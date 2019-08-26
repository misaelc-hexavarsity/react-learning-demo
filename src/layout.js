import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

// Views
import Users from "./views/Users";
import Create from "./views/Create";
import NotFound from "./views/NotFound"

class Layout extends React.Component {
	render() {
		return(
			<React.Fragment>
				<Switch>
					<Route exact path="/users" component={Users} />
					<Route exact path="/create" component={Create} />
					<Route exact path="/create/:id" component={Create} />
					<Redirect exact from="/" to="/users" />
					<Route path="*" component={NotFound} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default withRouter(Layout);
