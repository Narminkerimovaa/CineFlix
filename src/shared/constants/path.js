export const PATHS = {
  home:     '/',
  watchlist: '/watchlist',
  classics:  '/classics',
  earlyEra:  '/classics/1950-1975',
  lateEra:   '/classics/1975-2000',
  modern:    '/modern',
  detail:    '/movies/:id',
  notFound:  '*',
};

export const getDetailPath = (id) => `/movies/${id}`;