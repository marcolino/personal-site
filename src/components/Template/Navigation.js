import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = ({ t }) => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{t(l.label)}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{t(l.label)}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

Navigation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Navigation);
// export default Navigation;
