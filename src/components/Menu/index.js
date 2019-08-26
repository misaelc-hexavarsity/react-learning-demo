import React from 'react';
import PropTypes from 'prop-types';

import { Container, Menu as SemanticMenu, Icon } from 'semantic-ui-react';

import { Link } from "react-router-dom";

import './styles.css';

const MenuItem = (props) => {
    return (
        <SemanticMenu.Item>
            <Icon name={props.icon} style={{ color: "white" }} />
            <Link to={props.to}>
                {props.name}
           	</Link>
        </SemanticMenu.Item>
    );
}

class Menu extends React.Component {
	static propTypes = {
		title: PropTypes.string
	}

	render() {
        const { title } = this.props;
		return (
			<section>
				<h3 className="header">{title}</h3>
				<SemanticMenu                
                    borderless
					className="menuItem"
                >
                    <Container fluid>
						<MenuItem icon="user" to="/users" name="Users" />
						<MenuItem icon="save" to="/create" name="Create" />
                    </Container>
                </SemanticMenu>
			</section>
		);
	}

}

export default Menu;
