import { t } from '../i18n';

const data = [
  {
    title: t('Quiccasa'),
    subtitle: t('I sell my home'),
    image: '/images/projects/quiccasa.jpg',
    date: `${t('March')} 2021`,
    desc:
      t('A service to let people receive more timely, compact and'
      + 'ads free notices about new rental/sale offers for a'
      + 'specific real-estate search. The service is based on'
      + 'italian real-estate main source, immobiliare.it,'
      + 'and is hosted on AWS.'),
  },
  {
    title: t('Bitcoin indicator'),
    subtitle: t('A GTK widget to show an always up-to-date wallet value'),
    image: '/images/projects/bitcoin-indicator.jpg',
    date: `${t('December')} 2020`,
    desc:
      t('A widget to keep an eye on a currency market (in this case it\'s bitcoin)'),
  },
  {
    title: t('Resistenze mobile'),
    subtitle: t('A web app for resistenze.org site (a political newsletter) from "Centro di Cultura e Documentazione Popolare"'),
    image: '/images/projects/resistenze-mobile.jpg',
    date: `${t('July')} 2014`,
    desc:
      t('A web app to let peple read on their mobile the latest news in the site, and the full history based on date or category'),
  },
];

export default data;
