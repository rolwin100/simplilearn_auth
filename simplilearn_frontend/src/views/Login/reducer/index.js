import { GET_LOGIN_PENDING, GET_LOGIN_FULLFILLED, GET_LOGIN_REJECTED } from '../actions';

const auth = (state = { pending: false, data: [], error: null }, action) => {
  switch (action.type) {
    case GET_LOGIN_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_LOGIN_FULLFILLED:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_LOGIN_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
