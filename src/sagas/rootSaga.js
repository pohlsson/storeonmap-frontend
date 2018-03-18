import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import getApiData from './apiSagas.js'

function* rootSaga() {
  yield takeEvery("GET_DATA", getApiData);
}

export default rootSaga;
