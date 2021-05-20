import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withI18n } from 'react-i18next';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = ({ t }) => (
  <HelmetProvider>
    <Helmet title="404 Not Found" bodyAttributes={{ class: 'neon-text' }}>
      <meta name="description" content="The content you are looking for cannot be found." />
    </Helmet>
    <div className="not-found">
      <h1 className="neon-text">
        {t('Page not found')}
      </h1>
      <h2 className="neon-text">
        <Link to="/">{t('Go Home')}</Link>
      </h2>
    </div>
  </HelmetProvider>
);

PageNotFound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(PageNotFound);
