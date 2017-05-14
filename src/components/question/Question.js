import React, { Component } from 'react';
import Answer from './answer/Answer';
import './Question.css';

class Question extends Component {
	render() {
		const answers = <Answer />

		return (
			<div className="Question">
				<h1>Question?</h1>
				<p>Subtitle ...</p>
				{answers}
			</div>
		);
	}
}

export default Question;
