const env = process.env || {};
const array = [
  'REACT_APP_API_URL',
  'REACT_APP_API_AUTH',
  'REACT_APP_API_FILE_URL'
];

array.forEach((name) => {
  if (!env[name]) {
    console.warn(`The environment variable ${name} is missing, use default instead.`);
  }
});

const API_URL = env.REACT_APP_API_URL || 'http://example.com';
const API_AUTH = env.REACT_APP_API_AUTH || 'http://example.com';
const API_FILE_URL = env.REACT_APP_API_FILE_URL || 'http://file.example.com';

export {
  API_URL,
  API_AUTH,
  API_FILE_URL
};
