import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_RESUME,
} = process.env;

const Resume = ({ t }) => {
  const sections = [
    t('Education'),
    t('Experience'),
    t('Skills'),
    t('Courses'),
    t('References'),
  ];

  return (
    <Main
      title={t('Resume')}
      description={`t('{{name}} {{surname}}s resume', ${REACT_APP_MY_NAME}, ${REACT_APP_MY_SURNAME}): ${REACT_APP_MY_RESUME}`}
    >
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="resume">{t('Resume')}</Link></h2>
            <div className="link-container">
              {sections.map((section) => (
                <h4 key={section}>
                  <a href={`#${section.toLowerCase()}`}>{section}</a>
                </h4>))}
            </div>

          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        <References />

      </article>
    </Main>
  );
};

Resume.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Resume);
