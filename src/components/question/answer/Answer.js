import React, { Component } from 'react';
import './Answer.scss';

class Answer extends Component {
	render() {
		return (
			<div className="col-sm-6 col-xs-12">
				<button className="Answer btn btn-default btn-block">
					Answer {this.props.num}
				</button>
			</div>
		);
	}
}

export default Answer;
