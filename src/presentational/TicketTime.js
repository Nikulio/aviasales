import React from 'react';

const TicketTime = ({from, to, transfers}) => {
	return (
		<div className="ticket__time right-side__element">
			<span className="ticket__time-text">
				{from}
				</span>
			<div className="ticket__transfers">
				<span>
					{transfers} transfers
				</span>
				<img src="/img/plane.png" alt="plane"/>
			</div>
			<span className="ticket__time-text">
				{to}
				</span>
		</div>
	);
};

export default TicketTime;
