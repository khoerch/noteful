import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import NoteContext from '../NoteContext';
import './NoteDetail.css';

class NoteDetail extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NoteContext

    handleDeleteNote = e => {
        e.preventDefault()
        const noteId = this.props.note.id
        console.log(noteId)

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
                this.props.history.push(`/`)
                this.context.deleteNote(noteId)
            })
            .catch(error => {
                console.log({ error })
            })
    }

	render() {
		return (
                <div className='NoteDetail'>
					<div className="Note">
                        <h2>{this.props.note.name}</h2>
                        <p>Date modified on {this.props.note.modified} </p>
                    </div>
                    <button 
                        className="delete-note"
                        onClick={this.handleDeleteNote}>
                        Delete Note
                    </button>
                    <p>{this.props.note.content}</p>
                </div>
		);
	}
}

export default NoteDetail;