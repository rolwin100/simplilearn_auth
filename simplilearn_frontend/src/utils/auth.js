/* eslint-disable import/prefer-default-export */
export const authHeaders = (headers) => {
  const token = localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

export const authError = (msg) => {
  if (msg === 'Request failed with status code 401') {
    window.location = '/login';
  }
};

export const logout = () => {
  localStorage.clear();
  window.location = '/login';
};
