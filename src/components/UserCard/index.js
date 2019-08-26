import React from "react";
import PropTypes from "prop-types";

import { Card, Image, Icon } from "semantic-ui-react";

class UserCard extends React.Component {
	static propTypes = {
		id: PropTypes.number,
		img: PropTypes.string,
		name: PropTypes.string,
		age: PropTypes.number,
		role: PropTypes.string,
		onDelete: PropTypes.func
	}

	render() {
		const { id, img, name, age, role, onDelete } = this.props; 
		return(
			<Card>
				<Image src={img} />
				<Card.Content>
					<Card.Header>Name: {name}</Card.Header>
					<Card.Meta>
						<span>Age: {age}</span>
					</Card.Meta>
					<Card.Description>Role: {role}</Card.Description>
					<Icon data-id={id} link name='user delete' title="Delete user" color="red" onClick={onDelete} />
				</Card.Content>
			</Card>
		);
	}
}

export default UserCard;
