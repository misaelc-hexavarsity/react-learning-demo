// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import { Message } from 'semantic-ui-react'

class Post extends React.Component {
	static propTypes = {
		id: PropTypes.number,
		title: PropTypes.string,
		message: PropTypes.string,
		userId: PropTypes.number
	}

	render() {
		const { title, message } = this.props;
		return (
			<section>
				<Message>
					<Message.Header>{title}</Message.Header>
					<p>{message}</p>
				</Message>
			</section>
		);
	}
}

export default Post;
