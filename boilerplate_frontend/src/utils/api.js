/* eslint-disable import/prefer-default-export */
/** eslint-disable-next-line no-underscore-dangle */
import axios from 'axios';

import { authHeaders } from 'utils/auth';


let headers = {};
headers['Content-Type'] = 'application/json';
headers.Accept = 'application/json';

headers = authHeaders(headers);
/**
 * @description Make a get request to an api using this method
 *
 * @param {string} url Complete url (e.g., http://www.google.com)
 * @param {object} params The params to be appended
 * @param {object} header The headers to be sent with the api
 *
 * @returns {object} The response from the server
 */
const getApi = (url, params = {}, header = {}) => {
  headers = { ...headers, ...header };
  return axios.get(url, { params, headers });
};

/**
 * @description Make a post request to an api using this method
 *
 * @param {string} url Complete url (e.g., http://www.google.com)
 * @param {object} data Body of the post api
 * @param {object} header The headers to be sent with the api
 *
 * @returns {object} The response from the server
 */
const postApi = (url, data = {}, header = {}) => {
  headers = { ...headers, ...header };
  return axios.post(url, data, { headers });
};

/**
 * @description Make a delete request to an api using this method
 *
 * @param {string} url Complete url (e.g., http://www.google.com)
 * @param {object} params of the delete api
 * @param {object} header The headers to be sent with the api
 *
 * @returns {object} The response from the server
 */
const deleteApi = (url, params = {}, header = {}) => {
  headers = { ...headers, ...header };
  return axios.delete(url, { params, headers });
};

/**
 * @description Make a patch request to an api using this method
 *
 * @param {string} url Complete url (e.g., http://www.google.com)
 * @param {object} data Body of the patch api. Mostly the data to be updated
 * @param {object} header The headers to be sent with the api.
 *
 * @returns {object} The response from the server
 */
const patchApi = (url, data = {}, header = {}) => {
  headers = { ...headers, ...header };
  return axios.patch(url, { data, headers });
};

const apiRequests = {
  get: getApi,
  post: postApi,
  delete: deleteApi,
  patch: patchApi,
};
export default apiRequests;
