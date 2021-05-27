import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withI18n } from 'react-i18next';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_DOMAIN,
} = process.env;

/* eslint-disable no-unused-vars */
const Copyright = ({ t }) => (
  <p className="copyright">
    &copy; {`${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`} ~ <Link to="/">{`${REACT_APP_MY_DOMAIN}`}</Link>
  </p>
);

Copyright.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Copyright);
