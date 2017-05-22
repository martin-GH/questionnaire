import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import Store from './stores/Store';

import './style/app.scss';

const store = new Store();

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component store={store} />
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./App', () => {
		render(App)
	});
}
