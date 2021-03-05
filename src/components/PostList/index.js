// Libraries
import React from "react";
import PropTypes from "prop-types";

// Components
import Post from "../Post";


class PostList extends React.Component {
	static propTypes = {
		posts: PropTypes.array
	}

	static defaultProps = {
		posts: []
	}

	render() {
		const { posts } = this.props;
		return(
			<section>
				<header>Post List</header>
				{
					posts && posts.length > 0
						? postMessage.map(value => {
							return (
								<Post
									key={value.id}
									id={value.id}
									title={value.title}
									message={value.body}
									userId={value.userId}
								/>
							);
						})
						: <h2>No Posts Yet</h2>
				}
			</section>
		);
	}
}

export default PostList;
