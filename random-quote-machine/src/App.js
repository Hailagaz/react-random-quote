import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuote } from './quoteSlice';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

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

	const fetchRandomQuote = async () => {
		try {
			const response = await fetch('/quotes.json');

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();

			const randomIndex = Math.floor(Math.random() * data.length);
			const randomQuote = data[randomIndex];

			dispatch(setQuote({ text: randomQuote.text, author: randomQuote.author }));
		} catch (error) {
			console.error('Error fetching quote:', error);
		}
	};

	useEffect(() => {
		fetchRandomQuote();
	}, []);

	const particlesInit = async (engine) => {
		await loadSlim(engine);
	};

	const particlesLoaded = async (container) => {
		console.log(container);
	};

	return (
		<div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: '#0d47a1',
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: 'push',
							},
							onHover: {
								enable: true,
								mode: 'repulse',
							},
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
						},
						links: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						move: {
							direction: 'none',
							enable: true,
							outModes: {
								default: 'bounce',
							},
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 800,
							},
							value: 80,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: 'circle',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>

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
				<QuoteCard quote={quote} fetchRandomQuote={fetchRandomQuote} />
			</div>
		</div>
	);
}

export default App;
