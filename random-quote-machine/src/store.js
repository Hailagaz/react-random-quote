import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';

import initialQuoteData from './quotes.json';

const store = configureStore({
	reducer: {
		quote: quoteReducer,
	},
	preloadedState: {
		quote: {
			text: initialQuoteData[0].text,
			author: initialQuoteData[0].author,
		},
	},
});

export default store;
