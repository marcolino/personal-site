import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = ({ t }) => (
  <>
    <h3>{t('Some stats about me')}</h3>
    <Table data={data} />
  </>
);

PersonalStats.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(PersonalStats);
