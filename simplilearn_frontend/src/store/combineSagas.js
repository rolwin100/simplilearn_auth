import {
  all, fork,
} from 'redux-saga/effects';
import SignUp from 'views/SignUp/sagas';
import authSaga from 'views/Login/sagas';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(SignUp),
  ]);
}
