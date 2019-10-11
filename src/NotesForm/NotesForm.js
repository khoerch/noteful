import React, { Component } from 'react';
import './NotesForm.css';

class NotesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {
                value: ''
            },
            body: {
                value: ''
            }
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { title, body } = this.state
        console.log(title.value)
        console.log(body.value)
    }

    updateTitle(title) {
        this.setState({ title: {value: title} })
    }

    updateBody(body) {
        this.setState({ body: {value: body} })
    }

	render() {
		return (
                <form className='NotesForm' onSubmit={e => this.handleSubmit(e)}>
                    <legend>Add new note:</legend>
                    <label htmlFor="note-title">Title</label>
                    <input id="note-title" type="text" placeholder="Very important note" onChange={e => this.updateTitle(e.target.value)} />
                    <label htmlFor="note-body">Note</label>
                    <input id="note-body" type="text" placeholder="Let's see, what was so important..." onChange={e => this.updateBody(e.target.value)} />
                    <input type="submit"/>
                </form>
		);
	}
}

export default NotesForm;