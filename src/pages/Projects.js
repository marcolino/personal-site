import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
} = process.env;

const Projects = ({ t }) => (
  <Main
    title={t('Projects')}
    description={`${t("Learn about {{name}} {{surname}}'s projects", { name: REACT_APP_MY_NAME, surname: REACT_APP_MY_SURNAME })}.`}
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">{t('Projects')}</Link></h2>
          <p>{t('A selection of recent projects that I\'m not too ashamed of')}</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

Projects.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Projects);
