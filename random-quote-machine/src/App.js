import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from './redux/quoteSlice';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ParticlesBackground from './components/Particles';
import quotesData from './data/quotes.json';

function QuoteContainer({ quote }) {
	return (
		<div id="quote-box">
			<Typography variant="body1" gutterBottom>
				{quote.text}
			</Typography>
			<Typography variant="body2">- {quote.author}</Typography>
		</div>
	);
}

function App() {
	const quote = useSelector((state) => state.quote);
	const dispatch = useDispatch();

	const fetchRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotesData.length);
		const randomQuote = quotesData[randomIndex];

		dispatch(setQuote({ text: randomQuote.text, author: randomQuote.author }));
	};

	useEffect(() => {
		fetchRandomQuote();
	}, []);

	return (
		<div>
			<ParticlesBackground />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					minHeight: '100vh',
					paddingTop: '200px',
				}}
			>
				<Typography variant="h4" gutterBottom>
					Random Quote Machine
				</Typography>
				<Button
					id="new-quote"
					variant="contained"
					color="primary"
					onClick={fetchRandomQuote}
				>
					New Quote
				</Button>
				<QuoteContainer quote={quote} />
			</div>
		</div>
	);
}

export default App;