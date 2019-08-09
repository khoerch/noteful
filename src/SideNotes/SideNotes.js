import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './SideNotes.css';

class SideNotes extends Component {
	render() {
		return (
                <div className='SideNotes'>
                    <Link to="/">Go back</Link>
                    <p></p>
                </div>
		);
	}
}

export default SideNotes;