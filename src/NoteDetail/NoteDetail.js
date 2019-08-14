import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './NoteDetail.css';

class NoteDetail extends Component {
	render() {
		return (
                <div className='NoteDetail'>
					<div className="Note">
                        <h2>{this.props.note.name}</h2>
                        <p>Date modified on {this.props.note.modified} </p>
                    </div>
                    <button className="delete-note">Delete Note</button>
                    <p>{this.props.note.content}</p>
                </div>
		);
	}
}

export default NoteDetail;