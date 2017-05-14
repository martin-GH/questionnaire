import { mobx, observable } from 'mobx';
import fetch from 'isomorphic-fetch';

class Store {
	@observable fetched = false;

	/*constructor() {
		mobx.autorun(() => console.log(this.report));
	}*/

	fetch() {
		fetch('http://localhost:3000/mock.json')
			.then((data) => {
				console.log(data);
			})
			.catch(() => this.fetched = false)
	}
}

export default Store;
