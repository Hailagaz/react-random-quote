import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from './quoteSlice';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function QuoteCard({ quote, fetchRandomQuote }) {
	return (
		<Container
			maxWidth="sm"
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				backdropFilter: 'blur(10px)',
				borderRadius: '10px',
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
				padding: '20px',
			}}
		>
			<div id="quote-box">
				<Typography variant="body1" gutterBottom>
					{quote.text}
				</Typography>
				<Typography variant="body2">
					- {quote.author}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						marginTop: 2,
					}}
				>
					<Button
						id="new-quote"
						variant="contained"
						color="primary"
						onClick={fetchRandomQuote}
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
						<Button variant="outlined" color="primary">
							Tweet Quote
						</Button>
					</a>
				</Box>
			</div>
		</Container>
	);
}

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
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				minHeight: '100vh',
				paddingTop: '200px', // Adjust this value for the desired spacing
			}}
		>
			<Typography variant="h4" gutterBottom style={{
				textAlign: 'center',
			}}>
				Random Quote Machine
			</Typography>
			<QuoteCard quote={quote} fetchRandomQuote={fetchRandomQuote} />
		</div>
	);
}

export default App;
