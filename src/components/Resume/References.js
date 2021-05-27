import React from 'react';
import { Link } from 'react-router-dom';

import { t } from '../../i18n';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>{t('References are available upon request')}</h3>
      </Link>
    </div>
  </div>
);

export default References;
