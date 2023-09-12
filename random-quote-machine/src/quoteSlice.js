import { createSlice } from '@reduxjs/toolkit';

const quoteSlice = createSlice({
	name: 'quote',
	initialState: {
		text: 'This is the initial quote',
		author: 'Author',
	},
	reducers: {
		setQuote: (state, action) => {
			const { text, author } = action.payload;
			state.text = text;
			state.author = author;
		},
	},
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
