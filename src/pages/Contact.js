import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withI18n } from 'react-i18next';
/* eslint-disable no-unused-vars */
import i18n from 'i18next';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_EMAIL,
} = process.env;

const obfuscateEmail = (email) => {
  const omail = `${email}OOO`;
  return omail;
};

const Contact = ({ t }) => (
  <Main
    title={t('Contact')}
    description={t('Contact {{name}} {{surname}} via email {{email}}', { name: REACT_APP_MY_NAME, surname: REACT_APP_MY_SURNAME, email: obfuscateEmail(REACT_APP_MY_EMAIL) })}
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">{t('Contact')}</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>{t('Feel free to get in touch')}.</p>
        {t('You can email me at')}: <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(Contact);
