import React from "react";
import PropTypes from "prop-types";

class Create extends React.Component {
	static propTypes = {
		history: PropTypes.object,
		match: PropTypes.object
	}

	redirect = (e) => {
		e.preventDefault();
		this.props.history.push("/users");
	}

	params = (e) => {
		e.preventDefault();
		// let json = JSON.stringify(this.props.match);
		// alert(json);

		let queryId = this.props.match.params.id;
		alert(queryId);
	}

	render() {
		return (
			<div>
				<h1>Create</h1>
				<div>
					<button onClick={this.redirect}>Redirect</button>
				</div>
				<div>
					<button onClick={this.params}>See params</button>
				</div>
			</div>
		);
	}
}

export default Create;