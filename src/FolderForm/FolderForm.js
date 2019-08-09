import React, { Component } from 'react';
import './FolderForm.css';

class FolderForm extends Component {
	render() {
		return (
                <form className='FolderForm'>
                    <legend>Add new folder:</legend>
                    <label for="folder-title">Title</label>
                    <input id="folder-title" type="text" placeholder="Very important folder"/>
                    <input type="submit"/>
                </form>
		);
	}
}

export default FolderForm;