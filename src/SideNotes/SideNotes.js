import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './SideNotes.css';

class SideNotes extends Component {
	render() {
        let folderId = this.props.store.notes.find(note => note.id === this.props.noteId).folderId;
        let folder = this.props.store.folders.find(folder => folder.id === folderId).name;
		return (
                <div className='SideNotes'>
                    <Link to="/">Go back</Link>
                    <p>{folder}</p>
                </div>
		);
	}
}

export default SideNotes;