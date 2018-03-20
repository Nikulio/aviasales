export const FETCH_TICKETS = "FETCH_TICKETS";
export const FETCH_FILTERS = "FETCH_FILTERS";
export const HANDLE_CHECKBOXES = "HANDLE_CHECKBOXES";
export const HANDLE_CHECKBOXES_REQUEST = "HANDLE_CHECKBOXES_REQUEST";
export const FETCH_FILTERS_REQUEST = "FETCH_FILTERS_REQUEST";
export const FETCH_TICKETS_REQUEST = "FETCH_TICKETS_REQUEST";

export const handleCheckboxes = (data) => {
	return {
		type: HANDLE_CHECKBOXES_REQUEST,
		payload: data
	}
}
export const fetchTickets = () => {
	return {
		type: FETCH_TICKETS_REQUEST
	};
};

export const fetchFilters= () => {
	return {
		type: FETCH_FILTERS_REQUEST
	};
};

