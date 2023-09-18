import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function QuoteCard({ quote }) {
	return (
		<Container
			maxWidth="sm"
			sx={{
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				backdropFilter: 'blur(10px)',
				borderRadius: '10px',
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
				padding: '20px',
				textAlign: 'center',
				justifyItems: 'center'
			}}
		>
			<div id="quote-box">
				<Typography variant="body1" gutterBottom>
					{quote.text}
				</Typography>
				<Typography variant="body2">- {quote.author}</Typography>
			</div>
		</Container>
	);
}

export default QuoteCard;
