// Libraries
import React from "react";

// Components
// import TextInput from "../../components/TextInput";
import UserList from "../../components/UserList";

const users = [
	{ name: "Misael", category: "Developer", projectNumber: 4, description: "React Training" },
	{ name: "Jesus", category: "Developer", projectNumber: 2, description: "React Training" },
	{ name: "Alonso", category: "Developer", projectNumber: 1, description: "React Training" }
]

class Dashboard extends React.Component {

	state = {
		name: ""
	}

	// Used to play around with the TextInput
	sayHelloFn = () => {
		alert(`Hello ${this.state.name}`);
	}
	onChange = value => {
		this.setState({ name: value });
	}

	render() {
		return (
			<section>
				<UserList users={users} />
			</section>
		);
	}
}

export default Dashboard;