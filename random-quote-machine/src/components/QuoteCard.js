import React from 'react';
import Typography from '@mui/material/Typography';

function QuoteCard({ quote }) {
	return (
		<div id="quote-box">
			<Typography variant="body1" gutterBottom>
				{quote.text}
			</Typography>
			<Typography variant="body2">- {quote.author}</Typography>
		</div>
	);
}

export default QuoteCard;
