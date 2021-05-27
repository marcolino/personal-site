import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import i18n from '../../i18n';

const languages = [
  { label: 'it', flag: '🇮🇹' },
  { label: 'en', flag: '🇬🇧' },
]; // TODO: put this in some upper level

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  window.location.reload(); // force a reload, to avoid a lot of issues with dynamic content...
};

const ChangeLanguage = ({ t }) => (
  <>
    <ul className="icons">
      {languages.map((l) => (
        <li
          className="languages"
          key={l.label}
          disabled={t.language === l.label}
        >
          <div onClick={() => changeLanguage(l.label)} className="languages-flag">
            {l.flag}
          </div>
        </li>
      ))}
    </ul>
  </>
);

ChangeLanguage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withI18n()(ChangeLanguage);
