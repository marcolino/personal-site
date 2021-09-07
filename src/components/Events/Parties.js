import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import Table from './Table';
import data from '../../data/events/parties';

const Parties = ({ t }) => (
  <>
    <h3>{t('Parties')}</h3>
    <Table t={t} data={data} />
  </>
);

Parties.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Parties);
