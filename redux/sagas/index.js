// saga 模块化引入
import { fork } from 'redux-saga/effects';
import 'babel-polyfill';

// 异步逻辑
import { signin } from './signin';
import { signout } from './signout';
import { fetchData } from './fetchdata';

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
  yield [fork(signin), fork(signout), fork(fetchData)];
}
