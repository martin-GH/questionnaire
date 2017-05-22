import React, { Component } from 'react';
import Answer from './answer/Answer';
//import './Question.scss';

class Question extends Component {
	render() {
		return (
			<div className="Question">
				<div className="row">
					<div className="col-xs-12">
						<h1>{this.props.title}</h1>
						<p>{this.props.subtitle}</p>
					</div>
				</div>
				<div className="row">
					<Answer num="1"/>
					<Answer num="2"/>
					<Answer num="3"/>
					<Answer num="4"/>
					<Answer num="5"/>
				</div>
			</div>
		);
	}
}

export default Question;
