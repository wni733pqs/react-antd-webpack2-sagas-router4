import {
  put,
  call
} from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import API from 'API';
import 'babel-polyfill';
import { LOGOUT_REQUEST } from 'REDUX/actions/actionstype';
import { logoutSuccess } from 'REDUX/actions/user';
import { setCurrentItem, setOpenKeys } from 'REDUX/actions/menu';

function logout() {
  return API.getLogoputResource();
}

function* logoutRequest() {
  const key = [''];
  const item = 'orders';
  yield call(logout);
  yield put(logoutSuccess());
  yield put(setOpenKeys(key));
  yield put(setCurrentItem(item));
}

export function* signout() {
  yield* takeEvery(LOGOUT_REQUEST, logoutRequest);
}
