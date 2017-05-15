import { observer } from 'mobx-react';
import React, { Component } from 'react';
import Loader from './components/loader/Loader';
import Header from './components/header/Header';
import Step from './components/step/Step';

// import 'bootstrap/dist/css/bootstrap.css';

@observer
class App extends Component {
	constructor() {
		super();

		this.onPrev = this.onPrev.bind(this);
		this.onNext = this.onNext.bind(this);
	}

	onPrev() {
		if (this.props.store.stepIndex > 0) {
			this.props.store.stepIndex--;
		}
	}

	onNext() {
		if (this.props.store.stepIndex < this.props.store.maxIndex) {
			this.props.store.stepIndex++;
		}
	}

	render() {
		let content = <Loader/>;

		if (this.props.store.step) {
			content = (
				<Step
					data={this.props.store.step}
					onPrev={this.onPrev}
					onNext={this.onNext}
				/>
			);
		}

		return (
			<div className="questionnaire">
				<Header/>
				{content}
			</div>
		);
	}
}

export default App;
