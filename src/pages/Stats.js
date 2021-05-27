import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
} = process.env;

const Stats = ({ t }) => (
  <Main
    title={t('Stats')}
    description={`t('Some statistics about') ${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`}
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">{t('Stats')}</Link></h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

Stats.propTypes = {
  t: PropTypes.func.isRequired,
};

// export default Index;
export default withI18n()(Stats);
