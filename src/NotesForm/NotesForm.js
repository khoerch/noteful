import React, { Component } from 'react';
import './NotesForm.css';

class NotesForm extends Component {
	render() {
		return (
                <form className='NotesForm'>
                    <legend>Add new note:</legend>
                    <label htmlFor="note-title">Title</label>
                    <input id="note-title" type="text" placeholder="Very important note"/>
                    <label htmlFor="note-body">Note</label>
                    <input id="note-bofy" type="text" placeholder="Let's see, what was so important..."/>
                    <input type="submit"/>
                </form>
		);
	}
}

export default NotesForm;