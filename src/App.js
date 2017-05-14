import React, { Component } from 'react';
import Form from './components/form/Form';
import Page from './components/page/Page';
import Question from './components/question/Question';
import Store from './stores/Store';

class App extends Component {
	// const store = this

	render() {
		return (
			<div className="questionnaire">
				<div className="header">
					<h2>Hello, World!</h2>
				</div>
				<div className="step-container">
					<Form/>
					<Page/>
					<Question/>
				</div>
				<div className="footer">
					Footer
				</div>
			</div>
		);
	}
}

export default App;
