import React from "react";
import PropTypes from "prop-types";

import { getUsers, deleteUser } from "../../actions/actionCreators";
import { connect } from "react-redux";

import UserCard from "../../components/UserCard";

class Users extends React.Component {
	static propTypes = {
		users: PropTypes.array,
		getUsers: PropTypes.func,
		deleteUser: PropTypes.func
	}

	deleteUser = (e) => {
		debugger;
		e.preventDefault();
		let id = Number(e.target.getAttribute("data-id"));
		this.props.deleteUser(id);
	}

	componentDidMount() {
		this.props.getUsers();
	}

	render() {
		const { users } = this.props;
		return (
			<div>
				<h1>Users</h1>
				{
					users && users.length > 0 &&
						users.map(u => {
							return(
								<UserCard
									key={u.id}
									id={u.id}
									img={u.img}
									name={u.name}
									age={u.age}
									role={u.role}
									onDelete={this.deleteUser}
								/>
							);
						})
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	  users: state.mainReducer.users
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  getUsers: () => {
		dispatch(getUsers())
	  },
	  deleteUser: (id) => {
		  dispatch(deleteUser(id))
	  }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);