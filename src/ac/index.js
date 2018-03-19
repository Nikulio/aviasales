export const FETCH_TICKETS = "FETCH_TICKETS";
export const FETCH_TICKETS_REQUEST = "FETCH_TICKETS_REQUEST";

export const fetchTickets = () => {
	console.log("fired");
	return {
		type: FETCH_TICKETS_REQUEST
	};
};
