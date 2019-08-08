import React, { Component } from 'react';
import store from './dummy-store';
import './App.css';

class App extends Component {
	render() {
		console.log(store);
		return (
			<main className='App'>
				<header>
					<h1>Noteful</h1>
				</header>
				<nav>
					<Sidebar />
				</nav>
				<section>
					<NotesBox />
				</section>
			</main>
		);
	}
}

export default App;
