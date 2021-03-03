import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
	render() {
		return (
			<section className="menu">
				<Link to="/dashboard">
					Dashboard
				</Link>
				<Link to="/user">
					User
				</Link>
			</section>
		);
	}
}

export default Menu;
