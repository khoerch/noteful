import React, { Component } from 'react';
import './FolderForm.css';

class FolderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folder: {
                value: ''
            }
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const folderTitle = this.state.folder.value
        console.log(folderTitle)
    }

    updateFolder(folder) {
        this.setState({ folder: {value: folder} })
    }

	render() {
		return (
                <form className='FolderForm' onSubmit={e => this.handleSubmit(e)}>
                    <legend>Add new folder:</legend>
                    <label for="newFolder">Title</label>
                    <input id="newFolder" type="text" placeholder="Very important folder" onChange={e => this.updateFolder(e.target.value)}/>
                    <input type="submit"/>
                </form>
		);
	}
}

export default FolderForm;