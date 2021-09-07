import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Main from '../layouts/Main';

import Parties from '../components/Events/Parties';

const Stats = ({ t }) => (
  <Main
    title={t('Stats')}
    description={t('Important Events')}
  >
    <header>
      <div className="title">
        <h2 data-testid="heading"><Link to="/events">{t('Events')}</Link></h2>
      </div>
    </header>
    <Parties />
  </Main>
);

Stats.propTypes = {
  t: PropTypes.func.isRequired,
};

// export default Index;
export default withI18n()(Stats);
