import dayjs from 'dayjs';
import projectLinesCount from './project-lines-count';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/marcolino/personal-site
 */
const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/marcolino/personal-site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/marcolino/personal-site/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/marcolino/personal-site/network',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/marcolino/personal-site/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/marcolino/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /*
      find . -type f | fgrep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
      xargs -I file cat file | wc -l
    */
    label: 'Lines of Javascript powering this website',
    value: projectLinesCount,
    link: 'https://github.com/marcolino/personal-site/graphs/contributors',
  },
];

export default data;
