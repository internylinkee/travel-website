/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  Posts,
  TourGuide
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login },
  // Posts
  { path: '/posts', exact: true, component: Posts },
  // Tour Guide
  { path: '/tourguide', exact: true, component: TourGuide },
  // Not found
  { component: NotFound }
];

export default routes;
