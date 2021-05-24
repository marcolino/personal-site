import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';

import ContactIcons from '../Contact/ContactIcons';

const {
  PUBLIC_URL, // set automatically from package.json:homepage
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_EMAIL,
  REACT_APP_MY_DOMAIN,
} = process.env;

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

const SideBar = ({ t }) => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>{`${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`}</h2>
        <p>
          <a href={`mailto:${REACT_APP_MY_EMAIL}`}>
            {`${REACT_APP_MY_EMAIL}`}
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>{t('About')}</h2>
      <p>{t('Hi, I\'m {{name}}', { name: REACT_APP_MY_NAME })}. {t('I like building things')}.
        <br />
        {t('I am a full-stack developer, analyst and systemist')}.
        <br />
        {t('Currenty I work at')} <a href="https://mypass.company">MyPass</a>, {' '}
        {t('a young and dynamic start-up company active in e-ticketing and e-reservation services')}.
        <br />
        {t('Previously I was at')} Koinè Sistemi.
        {' '}
        {t('I was also employed at')} Centro Ricerche RAI in Torino {t('and')},
        {' '}
        {t('when starting my work career')}, {t('I did collaborate with')} Micromegas {t('in Pisa')}.
        <br />
        {t('I love running, playing football, sailing, snorkeling, bird-watching, cinema and reading paper books')}.
        <br />
        {t('I love with my whole heart a woman')}.
        {' '}
        {t('She does not love me anymore, but I am fighting to conquer her soul again')}.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">{t('Learn More')}</Link> : <Link to="/about" className="button">{t('About Me')}</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        <button
          type="button"
          style={{
            fontSize: 13, padding: 0, height: 0, opacity: 0.66,
          }}
          alt="use italian language"
          onClick={() => changeLanguage('it')}
        >
          🇮🇹
        </button>
        &nbsp;
        <button
          type="button"
          style={{
            fontSize: 13, padding: 0, height: 0, opacity: 0.66,
          }}
          alt="use english language"
          onClick={() => changeLanguage('en')}
        >
          🇬🇧
        </button>
        {' '}
        {i18n.language}
        &copy; {`${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`} ~ <Link to="/">{`${REACT_APP_MY_DOMAIN}`}</Link>.
      </p>
    </section>
  </section>
);

SideBar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(SideBar);
