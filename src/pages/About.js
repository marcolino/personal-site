import React from 'react';
import PropTypes from 'prop-types';
import { withI18n } from 'react-i18next';
import i18n from 'i18next';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

const {
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
} = process.env;

// uses babel to load contents of file
// NOTE: this code must be updated when supporting new languages...
let markdown;
switch (true) {
  case /^it.*/.test(i18n.language):
    markdown = raw('../data/about.it.md');
    break;
  case /^en.*/.test(i18n.language):
  default:
    markdown = raw('../data/about.md');
    break;
}
const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;
const countAbout = 100 * Math.floor(count / 100); // round it to 100

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = ({ t }) => (
  <Main
    title={t('About')}
    description={t('Learn about {{name}} {{surname}}', { name: REACT_APP_MY_NAME, surname: REACT_APP_MY_SURNAME })}
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">{t('About Me')}</Link></h2>
          <p>({t('in about {{count}} words', { count: countAbout })})</p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

About.propTypes = {
  t: PropTypes.func.isRequired,
};

// export default About;
export default withI18n()(About);
