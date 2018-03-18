import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import request from 'superagent';

function* getApiData(action) {

   try {
     const req = request.get('http://localhost:5000/search?q=' + action.searchString + '&webshops=false')
      const data = yield call(req);
      yield put({type: "GET_DATA_RECEIVED", data});
   } catch (e) {
      yield put({type: "GET_DATA_FAILED", message: e.message});
   }
}

export default getApiData;
