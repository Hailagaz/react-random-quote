import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ParticlesBackground from './components/Particles';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

function App() {
	const [quote, setQuote] = useState({ text: '', author: '' });

	const fetchRandomQuote = async () => {
		try {
			const response = await axios.get('https://api.quotable.io/random');
			const { content, author } = response.data;

			setQuote({ text: content, author });
		} catch (error) {
			console.error('Error fetching quote:', error);
		}
	};

	useEffect(() => {
		fetchRandomQuote();
	}, []);

	const tweetQuote = () => {
		const tweetText = `"${quote.text}" - ${quote.author}`;
		const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
		window.open(tweetUrl, '_blank');
	};

	return (
		<div>
			<ParticlesBackground />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '97vh',
				}}
			>
				<Container
					maxWidth="sm"
					sx={{
						padding: '20px',
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'row',
						'@media (max-width: 324px)': {
							flexDirection: 'column',
							alignItems: 'center',
						},
					}}
				>
					<Button
						id="new-quote"
						variant="contained"
						color="primary"
						onClick={fetchRandomQuote}
						sx={{
							minWidth: '150px',
							margin: '5px',
						}}
					>
						New Quote
					</Button>
					<Button
						id="tweet-quote"
						variant="contained"
						color="secondary"
						onClick={tweetQuote}
						sx={{
							minWidth: '150px',
							margin: '5px',
						}}
					>
						Tweet Quote
					</Button>
				</Container>

				<Container
					maxWidth="sm"
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-start',
						borderRadius: '10px',
						padding: '20px',
						textAlign: 'center',
						height: '300px',
						overflowY: 'auto',
					}}
				>
					<QuoteCard quote={quote} />
				</Container>


			</div>
		</div>
	);
}

export default App;
