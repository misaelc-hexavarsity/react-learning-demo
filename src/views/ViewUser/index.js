import React from "react";
import PropTypes from "prop-types";

class ViewUser extends React.Component {
	static propTypes = {
		history: PropTypes.any,
		match: PropTypes.any
	}

	seeRouteFn = () => {
		// Complete match object
		const json = JSON.stringify(this.props.match);
		// Params in Match
		// const json = this.props.match.params.id;
		alert(json);
	}

	goBack = () => {
		this.props.history.push("/dashboard");
	}

	render() {
		return (
			<div>
				<h1>Another view</h1>
				<div>
					<button onClick={this.seeRouteFn}>See Route</button>
				</div>
				<div>
					<button onClick={this.goBack}>Go Back to Dashboard</button>
				</div>
			</div>
			
		);
	}
}

export default ViewUser;
