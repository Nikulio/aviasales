import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "./ac";
import axios from "axios";

function fetchTicketsSaga() {
	return axios({
		method: "get",
		url: "/data.json"
	});
}

function* workerSaga() {
	try {
		const response = yield call(fetchTicketsSaga);
		const payload = response.data;
		yield put({ type: actions.FETCH_TICKETS, payload });
	} catch (error) {
		yield put({ type: "API_CALL_FAILURE", error });
	}
}

export function* rootSaga() {
	yield takeLatest(actions.FETCH_TICKETS_REQUEST, workerSaga);
}
