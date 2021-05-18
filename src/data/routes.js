const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
} = process.env;

const routes = [
  {
    index: true,
    label: `${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`,
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
