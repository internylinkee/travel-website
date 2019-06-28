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
  Reviews,
  Tours,
  AboutMe,
  Albums
} from 'containers';

const routes = [
  // Home
  { path: '/', exact: true, component: Home, requireLogin: '/login' },
  // Login
  { path: '/login', exact: true, component: Login },
  // Posts
  { path: '/posts', exact: true, component: Posts },
  { path: '/posts/:id/detail', exact: true, component: PostDetail },
  // Tour Guide
  { path: '/tourguide', exact: true, component: TourGuide },
  // ProfileUser
  { path: '/user/:id/:tab', exact: true, component: ProfileUser },
  // Not found
  { component: NotFound }
];

export default routes;
