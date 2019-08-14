import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import store from './dummy-store';
import Sidebar from './Sidebar/Sidebar';
import NotesBox from './NotesBox/NotesBox';
import NotesForm from './NotesForm/NotesForm';
import FolderForm from './FolderForm/FolderForm';
import SideNotes from './SideNotes/SideNotes';
import NoteDetail from './NoteDetail/NoteDetail';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			store: store
		}
	}
	render() {
		return (
			<main className='App'>
				<header>
					<h1>
						<Link to='/'>Noteful</Link>
					</h1>
				</header>
				<div className="lower">
					<Switch>
						<Route exact path='/' render={(routerProps) =>
							<Sidebar store={this.state.store}/>
						}/>
						<Route exact path='/note/:noteId' render={(routerProps) =>
							<SideNotes 
							store={this.state.store}
							noteId={routerProps.match.params.noteId}
							/>
						}/>
						<Route exact path='/folder/:folderId' render={(routerProps) =>
							<Sidebar store={this.state.store}/>
						}/>

						<Route path='/form-folder' render={(routerProps) =>
							<Sidebar store={this.state.store}/>
						}/>
						<Route path='/form-note' render={(routerProps) =>
							<Sidebar store={this.state.store}/>
						}/>
					</Switch>
					<Switch>
						<Route exact path='/' render={(routerProps) =>
							<NotesBox notes={this.state.store.notes}/>
						}/>
						<Route exact path='/note/:noteId' render={(routerProps) =>
							<NoteDetail 
							note={this.state.store.notes.find(note => note.id === routerProps.match.params.noteId)}
							/>
						}/>
						<Route exact path='/folder/:folderId' render={(routerProps) =>
							<NotesBox 
							notes={this.state.store.notes.filter(note => note.folderId === routerProps.match.params.folderId)}
							/>
						}/>

						<Route path='/form-folder' render={(routerProps) =>
							<FolderForm store={this.state.store}/>
						}/>
						<Route path='/form-note' render={(routerProps) =>
							<NotesForm store={this.state.store}/>
						}/>
					</Switch>
				</div>
			</main>
		);
	}
}

export default App;
