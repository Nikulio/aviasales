import * as actions from "../ac";

export function ticketsReducer(state = {}, action) {
	switch (action.type) {
		case actions.FETCH_TICKETS:
			const data = action.payload;
			return data.tickets;
		default:
			return state;
	}
}
