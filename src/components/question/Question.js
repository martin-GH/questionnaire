import React, { Component } from 'react';
import Answer from './answer/Answer';

class Question extends Component {
	render() {
		const answers = <Answer />

		return (
			<div>
				<h1>Headline</h1>
				<p>Subtitle</p>
				{answers}
			</div>
		);
	}
}

export default Question;
