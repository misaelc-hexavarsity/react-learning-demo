// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import { Card, Icon } from "semantic-ui-react";

class User extends React.Component {
	static propTypes = {
		name: PropTypes.string,
		imageUrl: PropTypes.string,
		category: PropTypes.string,
		description: PropTypes.string,
		projectNumber: PropTypes.number
	}

	static defaultProps = {
		name: "Misael",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTML%2FElement%2Fimg&psig=AOvVaw3za_KVu-FfwMLLToDQRSyN&ust=1614810566870000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCbiafUku8CFQAAAAAdAAAAABAD",
		category: "Developer",
		description: "He likes React",
		projectNumber: 0
	}

	// We can have methods that returns JSX expressions
	renderExtra = number => {
		return (
			<a>
				<Icon name='user' />
				{`${number} Projects`}
			</a>
		);
	}

	render() {
		const { name, imageUrl, category, description, projectNumber } = this.props;
		return(
			<React.Fragment>
				<Card
					image={imageUrl}
					header={name}
					meta={category}
					description={description}
					extra={
						<a>
							<Icon name='user' />
							{`${number} Projects`}
						</a>
					}
				/>
			</React.Fragment>
		);
	}
}

export default User;
