import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext'
import './SideNotes.css';

class SideNotes extends Component {
    static contextType = NoteContext;

	render() {
        let folderId = this.context.store.notes.find(note => note.id === this.props.noteId).folderId;
        let folder = this.context.store.folders.find(folder => folder.id === folderId).name;
		return (
                <div className='SideNotes'>
                    <Link to="/">Go back</Link>
                    <p>{folder}</p>
                </div>
		);
	}
}

export default SideNotes;