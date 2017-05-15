import mobx, { autorun, computed, observable } from 'mobx';
import fetch from 'isomorphic-fetch';

class Store {
	@observable steps = [];
	@observable stepIndex = 0;
	@observable maxIndex = 0;
	@observable isLoading = true;

	constructor() {
		this.loadQuestionnaire();
	}

	loadQuestionnaire() {
		this.isLoading = true;

		fetch('http://localhost:8080/mock.json')
			.then(this.parseJson)
			.then((data) => {
				data.steps.forEach((step) => {
					this.steps.push(step);
				});

				this.maxIndex = data.steps.length - 1;
				this.isLoading = false;
			});
	}

	parseJson(response) {
		return response.json();
	}

	@computed get step() {
		if (!this.steps.length) {
			return null;
		}

		return this.steps[this.stepIndex];
	}
}

export default Store;
