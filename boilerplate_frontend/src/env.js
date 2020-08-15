/* eslint-disable no-underscore-dangle */
/**
 * Gets the current host without subdomain
 */
export const getHost = () => {
  if (process.env.REACT_APP_HOST) {
    return process.env.REACT_APP_HOST;
  }

  const { hostname } = window.location;
  const pattern = new RegExp('localhost|127.0.0.1', 'i');

  if (pattern.test(hostname)) {
    return 'simplilearn.codes';
  }

  return hostname
    .split('.')
    .slice(-2)
    .join('.');
};

const env = (name, require = true) => {
  const key = `REACT_APP_${name}`;

  if (window.__ENV__ && key in window.__ENV__) {
    return window.__ENV__[key];
  }

  if (key in process.env) {
    return process.env[key];
  }

  if (typeof require !== 'boolean') {
    return require;
  }

  if (require) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return null;
};

Object.defineProperty(env, 'host', {
  get: getHost,
});

export default env;
