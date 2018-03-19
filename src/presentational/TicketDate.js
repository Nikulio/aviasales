import React from 'react';

const TicketDate = ({from, to}) => {
	return (
		<div className="ticket-date right-side__element">
							<span className="ticket-date__text">
								{from}
							</span>
			<span className="ticket-date__text">
				{to}
							</span>
		</div>
	);
};

export default TicketDate;
