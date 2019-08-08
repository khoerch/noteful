import React, { Component } from 'react';
import store from './dummy-store';
import './App.css';

class App extends Component {
	render() {
		console.log(store);
		return (
			<main className='App'>
				{/* content goes here */}
			</main>
		);
	}
}

export default App;
