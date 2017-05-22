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
			<div>
				<div className="row">
					<div className="col-xs-12">
						{this.getStepByType()}
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-xs-12"><button className="btn btn-block btn-md btn-primary" onClick={this.props.onPrev}>Prev</button></div>
					<div className="col-sm-6 col-xs-12"><button className="btn btn-block btn-md btn-primary" onClick={this.props.onNext}>Next</button></div>
				</div>
			</div>
		);
	}
}

export default Step;
