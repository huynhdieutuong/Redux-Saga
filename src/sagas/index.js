import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from 'redux-saga/effects';
import * as taskTypes from '../contants/task';
import { getList, addTask } from '../apis/task';
import { STATUS_CODE } from '../contants';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  filterTaskSuccess,
  addTaskSuccess,
  addTaskFailed,
} from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';
import { hideModal } from '../actions/modal';

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
  yield put(showLoading());
  const res = yield call(getList);
  yield delay(1000);
  yield put(hideLoading());
  if (res.status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(res.data));
  } else {
    yield put(fetchListTaskFailed(res.error));
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const list = yield select((state) => state.task.listTask);
  const filteredTask = list.filter((task) =>
    task.title
      .trim()
      .toLowerCase()
      .includes(payload.keyword.trim().toLowerCase())
  );
  yield put(filterTaskSuccess(filteredTask));
}

function* addTaskSaga({ payload }) {
  yield put(showLoading());
  const res = yield call(addTask, payload.newTask);
  yield put(hideLoading());
  if (res.status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(res.data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(res.error));
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default rootSaga;
