import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Note.css';
import NoteContext from '../NoteContext';

class Note extends Component {
    static defaultProps = {
        onDeleteNote: () => {},
    }

    static contextType = NoteContext;

    handleClickDelete = e => {
        e.preventDefault()
        const noteId = this.props.note.id

        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if(!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(() => {
                this.context.deleteNote(noteId)
                this.props.onDeleteNote(noteId)
            })
            .catch(error => {
                console.log({ error })
            })
    }

	render() {
		return (
                <li className='Note'>
                    <Link to={'/note/' + this.props.note.id}>
                        <h2>{this.props.note.name}</h2>
                        <p>Date modified on {this.props.note.modified} </p>
                    </Link>
                    <button 
                        className="delete-note"
                        type="button"
                        onClick={this.handleClickDelete}>
                        Delete Note
                    </button>
                </li>
		);
	}
}

export default Note;