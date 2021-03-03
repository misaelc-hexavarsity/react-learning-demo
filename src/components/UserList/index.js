import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

class UserList extends React.Component {
	static propTypes = {
		users: PropTypes.array
	}

	static defaultProps = {
		users: []
	}

	render() {
		const { users } = this.props;
		return(
			<section>
				<Table striped={true}>
    				<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Category</Table.HeaderCell>
							<Table.HeaderCell>Project Number</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{
							users.map((value, index) => {
								return (
									<Table.Row key={index}>
										<Table.Cell>{value.name}</Table.Cell>
										<Table.Cell>{value.category}</Table.Cell>
										<Table.Cell>{value.projectNumber}</Table.Cell>
										<Table.Cell>{value.description}</Table.Cell>
									</Table.Row>
								);
							})
						}
					</Table.Body>
				</Table>
			</section>
		);
	}
}

export default UserList;
