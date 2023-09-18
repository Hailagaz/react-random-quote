import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quoteSlice';

import initialQuoteData from './quotes.json';

const store = configureStore({
	reducer: {
		quote: quoteReducer,
	},
	preloadedState: {
		quote: initialQuoteData[0], // Initialize with the first quote
	},
});

export default store;
