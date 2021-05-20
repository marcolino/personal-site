import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = ({ t }) => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">{t('About this site')}</Link></h2>
          <p>
            {t('A beautiful, responsive, statically-generated, react application written with modern Javascript')}.
          </p>
        </div>
      </header>
      <h1>{t('Welcome')}</h1>
      <p>{t('Welcome to my website')}. {t('Please feel free to read more')} <Link to="/about">{t('about me')}</Link>,
        {t('or you can check out my')} {' '}
        <Link to="/resume">{t('resume')}</Link>, {' '}
        <Link to="/projects">{t('projects')}</Link>, {' '}
        view <Link to="/stats">{t('site statistics')}</Link>, {' '}
        or <Link to="/contact">{t('contact')}</Link> {t('me')}.
      </p>
      <p>{t('Source available')} <a href="https://github.com/marcolino/personal-site">{t('here')}</a>.</p>
    </article>
  </Main>
);

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

// export default Index;
export default withI18n()(Index);
