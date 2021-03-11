export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const GET_LIST_EMPLOYEE = 'GET_LIST_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const GET_LIST_EMPLOYEE_SUCCESS = 'GET_LIST_EMPLOYEE_SUCCESS';

export const startLoadingAction = () => ({
  type: START_LOADING,
});

export const endLoadingAction = () => ({
  type: END_LOADING,
});

export const getListEmployeeAction = () => ({
  type: GET_LIST_EMPLOYEE,
});

export const getListEmployeeActionSuccess = ({ employees }) => ({
  type: GET_LIST_EMPLOYEE_SUCCESS,
  payload: employees,
});

export const updateEmployeeAction = (data) => ({
  type: UPDATE_EMPLOYEE,
  payload: {
    data,
  },
});
