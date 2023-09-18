import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
	name: 'quote',
	initialState: { text: '', author: '' },
	reducers: {
		setQuote: (state, action) => {
			return action.payload;
		},
	},
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
