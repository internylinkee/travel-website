const variables = {
  /* ------ Common ------ */
  // color name trong hệ thống
  COLOR: [
    'volcano',
    'magenta',
    'orange',
    'gold',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
  ],
  // Date format
  DATE_FORMAT: {
    DATETIME: 'HH:mm DD/MM/YYYY',
    DATE_BEFORE_TIME: 'DD/MM/YYYY HH:mm',
    DATE: 'DD/MM/YYYY',
    TIME: 'HH:mm',
    DATETIME_NO_SPACE: 'YYYYMMDDHHmmss',
    DATE_VIEW_VN: 'ngày LL'
  },
  COOKIES_NAME: {
    AUTH: 'authInfo'
  },
  COOKIES_OPTION: {
    path: '/',
    maxAge: 2 * 24 * 60 * 60
  },
  /* ------ User ------ */
  // tabs profile
  PROFILE_TAB: {
    TIMELINE: 'timeline',
    REVIEWS: 'reviews',
    TOUR: 'tour',
    ABOUT_ME: 'about-me'
  },
  USER_PREFIX: {
    PROFILE: 'profile',
    USER: 'users'
  },
  /* ------ Post ------ */
  // loại bài viết
  TYPE_POST: {
    QUESTION: 'question',
    REVIEWS: 'review',
    TOUR: 'tour'
  }
};

export default variables;
