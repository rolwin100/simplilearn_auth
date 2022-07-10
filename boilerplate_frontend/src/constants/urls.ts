export const BASE_URL = process.env.BASE_URL || 'http://localhost:8000/api/v1';
export const URLS = {
  LOGIN: `${BASE_URL}/auth/login`,
  SIGNUP: `${BASE_URL}/auth/signup`,
  STATUS: `${BASE_URL}/status`,
};
