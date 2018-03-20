import { combineReducers } from "redux";
import { ticketsReducer } from "./ticketsReducer";
import { filtersReducer } from "./filtersReducer";
import { handleFiltersReducer } from "./handleFiltersReducer";
import {reducer as formReducer} from "redux-form"


export default combineReducers({
	tickets: ticketsReducer,
	filters: filtersReducer,
	activeFilters : handleFiltersReducer,
	form : formReducer
});
