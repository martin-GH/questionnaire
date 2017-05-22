import React, { Component } from 'react';

class Page extends Component {
	createMarkup() {
		return {__html: this.props.body};
	}

	render() {
		return (
			<div className="Page" dangerouslySetInnerHTML={this.createMarkup()}></div>
		);
	}
}

export default Page;
