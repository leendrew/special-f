export const ROUTE = {
  home: {
    name: 'home',
    path: '/',
  },
  hash: {
    name: 'hash',
    path: ':hash',
  },
  error: {
    name: '404',
    path: ':pathMatch(.*)*',
  },
} as const;

export const CSS_VAR = {
  textColor: '--text-color',
  bgColor: '--bg-color',
} as const;

export const COLOR_VALUE = {
  welcome: {
    text: '#ffffff',
    bg: '#4f46e5',
  },
  section: {
    text: '#27272a',
    bg: '#fdf4ff',
  },
} as const;

export const MIN_DURATION = 1500 as const;
