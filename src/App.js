import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Header from './components/header/Header';
import Step from './components/step/Step';

@observer
class App extends Component {
	constructor() {
		super();

		this.onNext = this.onNext.bind(this);
	}

	onNext() {
		this.props.store.stepIndex++;
	}

	render() {

		/*const steps = this.props.store.steps.map((step, i) => {
			switch(step.type) {
				case 'page':
					return (
						<Page key={step.uuid} data={step} />
				);

				case 'form':
					return (
						<Form key={step.uuid} data={step} />
					);

				case 'question':
					return (
						<Question key={step.uuid} data={step} />
					);
			}
		});*/

		return (
			<div className="questionnaire">
				<Header/>
				<Step
					onNext={this.onNext}
					currentStep={this.props.store.stepIndex}
				/>
			</div>
		);
	}
}

export default App;
