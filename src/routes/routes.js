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
  { path: '/posts', exact: true, component: Posts },
  { path: '/posts/:id/detail', exact: true, component: PostDetail },
  // Tour Guide
  { path: '/tourguide', exact: true, component: TourGuide },
  // Profile Current User
  { path: '/profile/:tab', exact: true, component: ProfileUser },
  // Profile User
  { path: '/user/:id/:tab', exact: true, component: ProfileUser },
  // Not found
  { component: NotFound }
];

export default routes;
