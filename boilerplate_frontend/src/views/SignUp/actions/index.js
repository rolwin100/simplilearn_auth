export const GET_SIGNUP = 'GET_SIGNUP';
export const GET_SIGNUP_PENDING = 'GET_SIGNUP_PENDING';
export const GET_SIGNUP_FULLFILLED = 'GET_SIGNUP_FULLFILLED';
export const GET_SIGNUP_REJECTED = 'GET_SIGNUP_REJECTED';

export const getSignup = (payload) => ({
  type: GET_SIGNUP,
  payload,
});
export const getSignupPending = () => ({
  type: GET_SIGNUP_PENDING,
});

export const getSignupFullfilled = (data) => ({
  type: GET_SIGNUP_FULLFILLED,
  data,
});

export const getSignupRejected = (error) => ({
  type: GET_SIGNUP_REJECTED,
  error,
});
