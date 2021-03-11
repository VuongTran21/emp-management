import {
  START_LOADING,
  END_LOADING,
  GET_LIST_EMPLOYEE_SUCCESS,
} from './action'

const initialState = {
  loading: false,
  employees: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case END_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }
    case GET_LIST_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
      }
    }
    default:
      return state;
  }
};
