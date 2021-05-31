import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';

import { version } from '../../package.alias.json';

/* eslint-disable no-unused-vars */
const Version = ({ t }) => (
  <p className="version">
    {`v.${version}`}
  </p>
);

Version.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Version);
