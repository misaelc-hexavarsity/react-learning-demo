import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.css";

class Button extends React.Component {
	static propTypes = {
		type: PropTypes.string,
		name: PropTypes.string,
		onClick: PropTypes.func
	}

	static defaultProps = {
		type: "primary",
		name: "Button"
	}

	handleClick = (e) => {
		e.preventDefault();
		this.props.onClick();
	}

	render() {
		const { name, type } = this.props;

		return (
			<button
				className={
					classNames("button", {"primary": type === "primary", "secondary": type === "secondary"})
				} 
				type="button"
				onClick={this.handleClick}
			>
				{name}
			</button>
		);
	}
}
 export default Button;
