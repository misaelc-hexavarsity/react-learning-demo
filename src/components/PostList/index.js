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
				<h1>Post List</h1>
				{
					posts && posts.length > 0
						? posts.map(value => {
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
