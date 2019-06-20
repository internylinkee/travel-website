/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  TourGuide
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login },
  // Tour Guide
  { path: '/tourguide', exact: true, component: TourGuide },
  // Not found
  { component: NotFound }
];

export default routes;
