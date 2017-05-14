import React, { Component } from 'react';
import Form from './../form/Form';
import Page from './../page/Page';
import Question from './../question/Question';

class Step extends Component {
	render() {
		return (
			<div className="Step">
				<div>{this.props.currentStep}</div>
				<div className="content">
					<Question/>
				</div>
				<div className="footer">
					<button onClick={this.props.onNext}>Next</button>
				</div>
			</div>
		);
	}
}

export default Step;
