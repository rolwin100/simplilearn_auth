export const GET_LOGIN = 'GET_LOGIN';
export const GET_LOGIN_PENDING = 'GET_LOGIN_PENDING';
export const GET_LOGIN_FULLFILLED = 'GET_LOGIN_FULLFILLED';
export const GET_LOGIN_REJECTED = 'GET_LOGIN_REJECTED';

export const getLogin = (payload) => ({
  type: GET_LOGIN,
  payload,
});
export const getLoginPending = () => ({
  type: GET_LOGIN_PENDING,
});

export const getLoginFullfilled = (data) => ({
  type: GET_LOGIN_FULLFILLED,
  data,
});

export const getLoginRejected = (error) => ({
  type: GET_LOGIN_REJECTED,
  error,
});
