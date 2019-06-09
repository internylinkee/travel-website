/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login },
  // Not found
  { component: NotFound }
];

export default routes;
