import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form>
				<input type="radio" name="gender" value="m" /> male
				<input type="radio" name="gender" value="f" /> female

				<input type="text" placeholder="Name" />
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default Form;
