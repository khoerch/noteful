import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Note.css';

class Note extends Component {
	render() {
		return (
                <li className='Note'>
                    <Link to={'/note/' + this.props.note.id}>
                        <h2>{this.props.note.name}</h2>
                        <p>Date modified on {this.props.note.modified} </p>
                    </Link>
                    <button className="delete-note">Delete Note</button>
                </li>
		);
	}
}

export default Note;