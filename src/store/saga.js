import { put, call, takeLeading } from 'redux-saga/effects';
import { startLoadingAction, endLoadingAction, GET_LIST_EMPLOYEE, getListEmployeeActionSuccess } from './action';
import { getListEmployeeApi } from '../helpers/api';

export function* getListEmployeeSaga() {
  try {
    yield put(startLoadingAction());
    const employees = yield call(getListEmployeeApi);
    yield put(getListEmployeeActionSuccess(employees));
    yield put(endLoadingAction());
  } catch (err) {
    console.error('Unexpected Error'.err);
    yield put(endLoadingAction());
  }
}

export default function* rootSaga() {
  yield takeLeading(GET_LIST_EMPLOYEE, getListEmployeeSaga);
}
