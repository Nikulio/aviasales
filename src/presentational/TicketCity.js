import React from 'react';

const TicketCity = ({from, to}) => {
	return (
		<div className="ticket-city right-side__element">
			<span className="ticket-city__text">
				{from}
				</span>
			<span className="ticket-city__text">
				{to}
				</span>
		</div>
	);
};

export default TicketCity;
