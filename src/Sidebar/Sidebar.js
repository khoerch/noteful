import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import NoteContext from '../NoteContext'
import './Sidebar.css';

class Sidebar extends Component {
    static contextType = NoteContext;

	render() {
        const folders = this.context.store.folders.map(folder => {
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
