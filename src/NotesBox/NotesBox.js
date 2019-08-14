import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Note from '../Note/Note';
import './NotesBox.css';

class NotesBox extends Component {
	render() {
        const notes = this.props.notes.map((note, i) => {
            return (
                <Note 
                    note={note}
                    key={i}/>
            )
        })
		return (
			<section className='NotesBox'>
				<ul>
                    {notes}
                </ul>
                <Link to="/form-note/">Add note</Link>
			</section>
		);
	}
}

export default NotesBox;