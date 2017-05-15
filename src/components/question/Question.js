import React, { Component } from 'react';
import Answer from './answer/Answer';
import './Question.css';

class Question extends Component {
	render() {
		const answers = <Answer />

		return (
			<div className="Question">
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
				{answers}
			</div>
		);
	}
}

export default Question;
