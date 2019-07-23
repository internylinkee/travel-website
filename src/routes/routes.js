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
  Registration,
  CreatePost
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
  { path: '/tourguides', exact: true, component: TourGuide },
  // Profile Current User
  { path: '/profile/:tab', exact: true, component: ProfileUser, requireLogin: '/login' },
  // Profile User
  { path: '/users/:id/:tab', exact: true, component: ProfileUser, requireLogin: '/login' },
  // Create Post
  { path: '/create-post', exact: true, component: CreatePost, requireLogin: '/login' },
  // Update Post
  { path: '/posts/:id/edit', exact: true, component: CreatePost, requireLogin: '/login' },
  // Not found
  { component: NotFound }
];

export default routes;
