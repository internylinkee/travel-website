/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  Posts,
  ProfileUser,
  TourGuide,
  PostDetail,
  Registration
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home },
  // Login
  { path: '/login', exact: true, component: Login, isUseMasterLayout: false },
  // Registration
  { path: '/registration', exact: true, component: Registration, isUseMasterLayout: false },
  // Posts
  { path: '/posts', exact: true, component: Posts, requireLogin: '/login' },
  { path: '/posts/:id/detail', exact: true, component: PostDetail, requireLogin: '/login' },
  // Tour Guide
  { path: '/tourguide', exact: true, component: TourGuide, requireLogin: '/login' },
  // Profile Current User
  { path: '/profile/:tab', exact: true, component: ProfileUser, requireLogin: '/login' },
  // Profile User
  { path: '/users/:id/:tab', exact: true, component: ProfileUser, requireLogin: '/login' },
  // Not found
  { component: NotFound }
];

export default routes;
