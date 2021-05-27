import dayjs from 'dayjs';
import { t } from '../../i18n';
import projectLinesCount from './project-lines-count'; // from pre-commit hook

const language = 'it'; // TODO: use i18next

const upperCaseWordsInitials = (str) => str.split(' ').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
const formatDate = (datestring) => {
  const date = new Date(datestring);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return upperCaseWordsInitials(date.toLocaleDateString(language, options));
};

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/marcolino/personal-site
 */
const data = [
  {
    key: 'stargazers_count',
    label: t('Stars this repository has on github'),
    link: 'https://github.com/marcolino/personal-site/stargazers',
  },
  {
    key: 'subscribers_count',
    label: t('Number of people watching this repository'),
    link: 'https://github.com/marcolino/personal-site/stargazers',
  },
  {
    key: 'forks',
    label: t('Number of forks'),
    link: 'https://github.com/marcolino/personal-site/network',
  },
  {
    key: 'linter_warnings_count',
    label: t('Number of linter warnings'),
    value: '0', // enforced via github workflow
  },
  {
    key: 'open_issues_count',
    label: t('Open github issues'),
    link: 'https://github.com/marcolino/personal-site/issues',
  },
  {
    key: 'pushed_at',
    label: t('Last updated at'),
    link: 'https://github.com/marcolino/personal-site/commits',
    format: (x) => formatDate(dayjs(x), language),
  },
  {
    key: 'project_lines_count',
    label: t('Lines of Javascript powering this website'),
    value: projectLinesCount,
    link: 'https://github.com/marcolino/personal-site/graphs/contributors',
  },
];

export default data;
