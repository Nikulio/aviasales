import * as actions from "../ac";

export function filtersReducer(state = {}, action) {
	switch (action.type) {
		case actions.FETCH_FILTERS:
			return action.payload;
		default:
			return state;
	}
}
