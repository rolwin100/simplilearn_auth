/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects';
import api from 'utils/api';
import { URLS } from 'constants/urls';
import {
  GET_SIGNUP, getSignupFullfilled, getSignupRejected,
} from '../actions';
/**
 * worker saga
 */
const { post } = api;
const { SIGNUP } = URLS;
export function* getSignupWorker(action) {
  try {
    const response = yield call(post, SIGNUP, action.payload);
    yield put(getSignupFullfilled(response.data));
    localStorage.setItem('token', response.data.token);
    window.location = '/';
  } catch (e) {
    yield put(getSignupRejected(e));
  }
}


/**
 * watcher saga
 */
export default function* getSignupWatcher() {
  yield takeEvery(GET_SIGNUP, getSignupWorker);
}
