import * as actions from "../ac"

export function handleFiltersReducer(state = {}, action) {
	switch (action.type) {
		case actions.HANDLE_CHECKBOXES :
			return action.payload;
		default:
			return state
	}
}
