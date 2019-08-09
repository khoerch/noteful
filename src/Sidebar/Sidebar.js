import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
	render() {
        const folders = this.props.store.folders.map(folder => {
            return (
                <NavLink to={'/folder/' + folder.id}>
                    <li className="folder">
                        {folder.name}
                    </li>
                </NavLink>
            )
        })
		return (
			<nav className='Sidebar'>
				<ul>
                    {folders}
                </ul>
                <Link to="/form-folder/">Add folder</Link>
			</nav>
		);
	}
}

export default Sidebar;
