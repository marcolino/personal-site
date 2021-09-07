import { t } from '../i18n';

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
    label: t('About'),
    path: '/about',
  },
  {
    label: t('Resume'),
    path: '/resume',
  },
  {
    label: t('Projects'),
    path: '/projects',
  },
  {
    label: t('Stats'),
    path: '/stats',
  },
  {
    label: t('Events'),
    path: '/events',
  },
  {
    label: t('Contact'),
    path: '/contact',
  },
];

export default routes;
