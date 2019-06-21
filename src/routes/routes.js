/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import {
  Home,
  Login,
  NotFound,
  Posts,
  Profile,
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
  // Profile
  { path: '/profile/:id', exact: true, component: Profile },
  { path: '/profile/:id/reviews', exact: true, component: Reviews },
  { path: '/profile/:id/tours', exact: true, component: Tours },
  { path: '/profile/:id/albums', exact: true, component: Albums },
  { path: '/profile/:id/aboutme', exact: true, component: AboutMe },
  // Not found
  { component: NotFound }
];

export default routes;
