import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Redux store
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
);

reportWebVitals();
