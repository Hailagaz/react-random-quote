import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from './quoteSlice';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
	}, []);

	return (
		<Container
			maxWidth="sm"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				backgroundColor: 'rgba(255, 255, 255, 0.9)', // Background with opacity
				backdropFilter: 'blur(10px)', // Add a blur effect to the background
				borderRadius: '10px', // Rounded corners for the "card"
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Box shadow for the "card"
			}}
		>
			<div id="quote-box">
				<Typography variant="h4" gutterBottom>
					Random Quote Machine
				</Typography>
				<Typography id="text" variant="body1" gutterBottom>
					{quote.text}
				</Typography>
				<Typography id="author" variant="body2">
					- {quote.author}
				</Typography>
				<Button
					id="new-quote"
					variant="contained"
					color="primary"
					onClick={fetchRandomQuote}
					sx={{ marginTop: 2 }}
				>
					New Quote
				</Button>
				<a
					id="tweet-quote"
					href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
						`${quote.text} - ${quote.author}`
					)}`}
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: 'none' }}
				>
					<Button
						variant="outlined"
						color="primary"
						sx={{ marginLeft: 1 }}
					>
						Tweet Quote
					</Button>
				</a>
			</div>
		</Container>
	);
}

export default App;
