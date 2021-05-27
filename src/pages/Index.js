import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_DESCRIPTION,
  REACT_APP_MY_GITHUB_PROJECT_URL,
} = process.env;

const Index = ({ t }) => (
  <Main
    description={`${t("{{name}} {{surname}}'s personal website. {{description}}", { name: REACT_APP_MY_NAME, surname: REACT_APP_MY_SURNAME, description: REACT_APP_MY_DESCRIPTION })}.`}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">{t('Welcome')}</Link></h2>
          <p>
            {t('Welcome to my website')}. {' '}
            {t('Please feel free to read more')} <Link to="/about">{t('about me')}</Link>, {' '}
            {t('or check out')} {' '}
            <Link to="/resume">{t('my curriculum')}</Link>, {' '}
            <Link to="/projects">{t('my projects')}</Link>, {' '}
            {t('view')} <Link to="/stats">{t('site statistics')}</Link>, {' '}
            {t('or')} <Link to="/contact">{t('contact me')}</Link>.
          </p>
        </div>
      </header>
      <h1>{t('About this site')}</h1>
      <p>
        {t('A sleek, responsive, statically-generated react application written with modern Javascript')}.
      </p>
      <p>
        {t('Source available')} <a href={REACT_APP_MY_GITHUB_PROJECT_URL}>{t('here')}</a>.
      </p>
    </article>
  </Main>
);

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

// export default Index;
export default withI18n()(Index);
