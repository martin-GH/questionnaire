import React, { Component } from 'react';
import Form from './../form/Form';
import Page from './../page/Page';
import Question from './../question/Question';

class Step extends Component {
	getStepByType() {
		switch (this.props.data.type) {
			case 'page':
				return (
					<Page key={this.props.data.uuid} {...this.props.data} />
				);

			case 'form':
				return (
					<Form key={this.props.data.uuid} {...this.props.data}/>
				);

			case 'question':
				return (
					<Question key={this.props.data.uuid} {...this.props.data}/>
				);
		}
	}

	render() {
		return (
			<div className="Step">
				<div className="content">
					{this.getStepByType()}
				</div>
				<div className="footer">
					<button onClick={this.props.onPrev}>Prev</button>
					<button onClick={this.props.onNext}>Next</button>
				</div>
			</div>
		);
	}
}

export default Step;
