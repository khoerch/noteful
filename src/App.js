import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import store from './dummy-store';
import Sidebar from './Sidebar/Sidebar';
import NotesBox from './NotesBox/NotesBox';
import NotesForm from './NotesForm/NotesForm';
import FolderForm from './FolderForm/FolderForm';
import SideNotes from './SideNotes/SideNotes';
import NoteDetail from './NoteDetail/NoteDetail';
import NoteContext from'./NoteContext'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			store: {
				folders: [],
				notes: []
			}
		}
	}

	componentDidMount() {
		Promise.all([
			fetch('http://localhost:9090/folders'), 
			fetch('http://localhost:9090/notes')
		])
			.then(([resFolders, resNotes]) => {
				if(!resFolders.ok) {
					return resFolders.json().then(e => Promise.reject(e))
				}
				if(!resNotes.ok) {
					return resNotes.json().then(e => Promise.reject(e))
				}

				return Promise.all([resFolders.json(), resNotes.json()])
			})
			.then(([folders, notes]) => {
				this.setState({
					store: {
						folders: folders,
						notes: notes
					}
				})
			})
			.catch(err => console.error({err}))
	}

	render() {
		const contextValue = {
			store: this.state.store
		}

		return (
			<main className='App'>
				<header>
					<h1>
						<Link to='/'>Noteful</Link>
					</h1>
				</header>
				<div className="lower">
					<NoteContext.Provider value={contextValue}>
						<Switch>
							{['/', '/folder/:folderId', '/form-folder', '/form-note'].map(path => (
								<Route exact path={path} component={Sidebar} />
							))}
							<Route exact path='/note/:noteId' render={(routerProps) =>
								<SideNotes 
								noteId={routerProps.match.params.noteId}
								/>
							}/>
						</Switch>
						<Switch>
							<Route exact path='/' component={NotesBox}/>
							<Route exact path='/note/:noteId' render={(routerProps) =>
								<NoteDetail 
								note={this.state.store.notes.find(note => note.id === routerProps.match.params.noteId)}
								/>
							}/>
							<Route exact path='/folder/:folderId' render={(routerProps) =>
								<NotesBox 
								folderId={routerProps.match.params.folderId}
								/>
							}/>

							<Route path='/form-folder' component={FolderForm}/>
							<Route path='/form-note'  component={NotesForm}/>
						</Switch>
					</NoteContext.Provider>
				</div>
			</main>
		);
	}
}

export default App;
