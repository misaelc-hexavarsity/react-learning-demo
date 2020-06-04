import React from "react";
import PropTypes from "prop-types";

class Create extends React.Component {
	static propTypes = {
		history: PropTypes.any,
		match: PropTypes.any
	}

	handleCreate = (e) => {
		e.preventDefault();
		// TODO: Agregar y validar usuario
		this.props.history.push("/users");
	}

	showMatch = (e) => {
		e.preventDefault();
		const matchString = JSON.stringify(this.props.match.params.id);
		alert(matchString);
	}

	componentDidMount() {
		// Llamar a un API usando match
	}


	render() {
		return (
			<div>
				<h1>Create</h1>
				<div>
					<button type="button" onClick={this.handleCreate}>Crear</button>
				</div>
				<div>
					<button type="button" onClick={this.showMatch}>Mostrar match</button>
				</div>
			</div>
		);
	}
}

export default Create;
