import React from "react";

const Context = React.createContext({});

class ContextProvider extends React.Component {

	state = {
		users: [],
		updateUsers: users => {
			this.setState({ users: users })
		}
	}
	
	render() {
		return(
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}

}

export { ContextProvider, Context };
