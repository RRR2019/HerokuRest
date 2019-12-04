import React, { Component } from 'react';
import Signup from '../Signup/Signup';
import Jumbotron from '../Jumbotron/Jumbotron.js';


class Register extends Component {
	render() {
		return (
			<div className="App">
				<Jumbotron />
				<Signup />
			</div>
		);
	}
}

export default Register;
