import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Note from '../Note/Note';
import './NotesBox.css';
import NoteContext from '../NoteContext';

class NotesBox extends Component {
    static contextType = NoteContext;

	render() {
        const notes = (this.props.folderId == null ? this.context.store.notes : this.context.store.notes.filter(
            note => note.folderId === this.props.folderId
        ))
        .map((note, i) => {
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