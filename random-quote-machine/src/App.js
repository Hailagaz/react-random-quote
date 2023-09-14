import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from './quoteSlice';

function App() {
	const quote = useSelector((state) => state.quote);
	const dispatch = useDispatch();

	const fetchRandomQuote = () => {
		// Insert real API to fetch random quotes
		const fakeQuote = {
			text: 'This is a random quote',
			author: 'Anonymous',
		};
		dispatch(setQuote(fakeQuote));
	};

	useEffect(() => {
		fetchRandomQuote();
	}, [fetchRandomQuote]);

	return (
		<div className="container">
			<div id="quote-box">
				<h1>Random Quote Machine</h1>
				<p id="text">{quote.text}</p>
				<p id="author">- {quote.author}</p>
				<button id="new-quote" onClick={fetchRandomQuote}>
					New Quote
				</button>
				<a
					id="tweet-quote"
					href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
						`${quote.text} - ${quote.author}`
					)}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					Tweet Quote
				</a>
			</div>
		</div>
	);
}

export default App;
