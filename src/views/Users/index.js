import React from "react";
import api from "../../libs/api";
import { Link } from "react-router-dom";

class Users extends React.Component {
	state = {
		users: []
	}

	componentDidMount() {
		api.get("/users").then(response => {
			this.setState({ users: response.data.data });
		});
		api.post("/login", { user: "", password: "" }).then(response => {
			this.setState({ users: response.data.data });
		});
	}

	render() {
		const { users } = this.state;
		console.log("Users", users);

		return (
			<div>
				<h1>Users</h1>
				<div>
					<ol>
						{
							users.length > 0 && users.map(user => {
								return (
									<li key={user.id}>
										<span>{user.name}</span>
									</li>
								);
							})
						}
					</ol>
				</div>
				<div>
					<Link to="/create">Create</Link>
				</div>
			</div>
		);
	}
}

export default Users;
