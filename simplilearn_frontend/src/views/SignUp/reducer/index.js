import { GET_SIGNUP_PENDING, GET_SIGNUP_FULLFILLED, GET_SIGNUP_REJECTED } from '../actions';

const signup = (state = { pending: false, data: [], error: null }, action) => {
  switch (action.type) {
    case GET_SIGNUP_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_SIGNUP_FULLFILLED:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_SIGNUP_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default signup;
