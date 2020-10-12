import { fork, take, call, put } from 'redux-saga/effects';
import * as taskTypes from '../contants/task';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../contants';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';

/**
 * Step1: Start action fetch task
 * Step2: call api
 * Step2.1: Show loading
 * Step3: Check status code
 * If success
 * If failed
 * Step4: Off loading
 * Step5: Start continue actions
 */
function* watchFetchListTaskAction() {
  yield take(taskTypes.FETCH_TASK);
  const res = yield call(getList);
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(res.data));
  } else {
    yield put(fetchListTaskFailed(res.error));
  }
}

function* watchCreateTaskAction() {
  console.log('watching create task action');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
