import i18n from '../i18n';

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
    label: i18n.t('About'),
    path: '/about',
  },
  {
    label: i18n.t('Resume'),
    path: '/resume',
  },
  {
    label: i18n.t('Projects'),
    path: '/projects',
  },
  {
    label: i18n.t('Stats'),
    path: '/stats',
  },
  {
    label: i18n.t('Contact'),
    path: '/contact',
  },
];

export default routes;
