/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';
import { URLS } from 'constants/urls';
import {
  GET_LOGIN, getLoginFullfilled, getLoginRejected,
} from '../actions';
/**
 * worker saga
 */
const { post } = api;
const { LOGIN } = URLS;
export function* getLoginWorker(action) {
  try {
    const response = yield call(post, LOGIN, action.payload);
    yield put(getLoginFullfilled(response.data));
    localStorage.setItem('token', response.data.token);
    window.location = '/';
  } catch (e) {
    yield put(getLoginRejected(e));
  }
}


/**
 * watcher saga
 */
export default function* getLoginWatcher() {
  yield takeEvery(GET_LOGIN, getLoginWorker);
}
