import * as taskApis from '../apis/task';
import * as taskConstants from '../contants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

/**
 * Step1: fetchListTaskRequest()
 * Step2: Reset state tasks => fetchListTask()
 * Step3: fetchListTaskSuccess()
 *        fetchListTaskFailed()
 */
export const fetchListTaskRequest = () => {
  return (dispatch) => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then((res) => {
        dispatch(fetchListTaskSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchListTaskFailed(error));
      });
  };
};
