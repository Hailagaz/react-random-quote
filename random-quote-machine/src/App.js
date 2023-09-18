import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
					}}>
					<Button
						id="new-quote"
						variant="contained"
						color="primary"
						onClick={fetchRandomQuote}
						maxWidth="50px"
					>
						New Quote
					</Button>
					<Button
						id="tweet-quote"
						variant="contained"
						color="secondary"
						onClick={tweetQuote}
						maxWidth="50px"
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
						justifyContent: 'center',
						backgroundColor: 'rgba(255, 255, 255, 0.5)',
						backdropFilter: 'blur(10px)',
						borderRadius: '10px',
						boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
						padding: '20px',
						textAlign: 'center',
						height: '200px',
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
