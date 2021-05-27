import { t } from '../../i18n';

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: [t('Web Development'), t('Languages'), t('Javascript')],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: [t('Web Development'), t('Javascript')],
  },
  {
    title: 'React-Native',
    competency: 4,
    category: [t('Web Development'), t('Javascript')],
  },
  {
    title: 'React',
    competency: 3,
    category: [t('Web Development'), t('Javascript')],
  },
  {
    title: 'Bash',
    competency: 5,
    category: [t('Tools'), t('Languages')],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: [t('Web Development'), t('Tools')],
  },
  {
    title: 'Heroku',
    competency: 1,
    category: [t('Web Development'), t('Tools')],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: [t('Web Development'), t('Databases')],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: [t('Web Development'), t('Databases'), t('Languages')],
  },
  {
    title: 'PostgreSQL',
    competency: 2,
    category: [t('Web Development'), t('Databases'), t('Languages')],
  },
  {
    title: 'SQLite3/SQL',
    competency: 3,
    category: [t('Web Development'), t('Databases'), t('Languages')],
  },
  {
    title: 'SQL',
    competency: 2,
    category: [t('Web Development'), t('Databases'), t('Languages')],
  },
  {
    title: 'Data Mining',
    competency: 2,
    category: [t('Data Science')],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: [t('Web Development'), t('Javascript')],
  },
  {
    title: 'D3',
    competency: 1,
    category: [t('Web Development'), t('Javascript')],
  },
  {
    title: 'Git',
    competency: 3,
    category: [t('Tools')],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: [t('Web Development'), t('Languages')],
  },
  {
    title: 'Python',
    competency: 1,
    category: [t('Languages')],
  },
  {
    title: 'C',
    competency: 3,
    category: [t('Languages')],
  },
  {
    title: 'Perl',
    competency: 3,
    category: [t('Languages')],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#ffa86b',
  '#ffba78',
  '#ffcc84',
  '#ffd991',
  '#ffe69e',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
