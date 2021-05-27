import { t } from '../../i18n';

const positions = [
  {
    company: 'Micromegas',
    position: t('trainee'),
    link: '',
    daterange: '1983 - 1985',
    points: [
      t('My first programming experiences on assembler of 8080!'),
    ],
  },
  {
    company: 'Koinè Sistemi',
    position: t('Systems manager and full stack developer'),
    link: 'rb.gy/f87vmc',
    daterange: '1985 - 2016',
    points: [
      t('Systems analysis, network administration, software development, customers relations.'),
    ],
  },
  {
    company: t('Centro Ricerche RAI in Torino'),
    position: t('Consultant'),
    link: '',
    daterange: '2016 - 2018',
    points: [
      t('Collaborated building an electronic stenotypy system for live subtitling of TV broadcasts (Televideo page 777).'),
    ],
  },
  {
    company: 'Provincia di Cuneo',
    position: t('Consultant'),
    link: 'https://www.provincia.cuneo.gov.it/',
    daterange: '1999 - 2000',
    points: [
      t('Collaborated activating the Data Processing Center.'),
    ],
  },
  {
    company: 'CIDiS',
    position: t('Consultant'),
    link: 'https://www.cidis.org/',
    daterange: '2003 - 2006',
    points: [
      t('Collaborated activating the Data Processing Center.'),
    ],
  },
  {
    company: 'MyPass s.r.l.',
    position: t('Systemist and developer'),
    link: 'https://mypass.company/',
    daterange: `2017 - ${t('present')}`,
    points: [
      t('System and network administrator.'),
      t('Mobile applications developer using react-native technology, targeting Android and iOS devices.'),
      t('Development of a mobile app using react-native technology for Città di Udine to enable users to park both in structure and on surface, to handle their subscriptions, recharge electric cars, and pay with in-app wallet or credit cards.'),
    ],
  },
];

export default positions;
