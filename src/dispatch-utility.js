import {AWAITING, SUCCESS, FAIL} from './dispatch_statuses';

const dispatchWrap = (dispatch, type, addObj) => {
  return (status, response) => {
    dispatch(Object.assign({}, {type, status}, addObj, response));
  }
}

export default (type, dispatch, addObj) => {
  const disp = dispatchWrap(dispatch, type, addObj);
  return {
    awaiting(response) {
      disp(AWAITING, response);
    },
    success(response) {
      disp(SUCCESS, response);
    },
    fail(response) {
      disp(response, response);
    }
  };
}
