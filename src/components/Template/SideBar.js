import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage
const {
  PUBLIC_URL, // set automatically from package.json:homepage
  REACT_APP_MY_NAME,
  REACT_APP_MY_SURNAME,
  REACT_APP_MY_EMAIL,
  REACT_APP_MY_DOMAIN,
} = process.env;

const SideBar = () => (
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
      <h2>About</h2>
      <p>Hi, I&apos;m Marco. I like building things.
        <br />
        I am a full-stack developer, analyst and systemist.
        <br />
        Currenty I work at <a href="https://mypass.company">MyPass</a>.
        Previously I was at Koinè Sistemi.
        I was also employed at Centro Ricerche RAI in Torino and
        , when starting my work career, I did collaborate with Micromegas in Pisa.
        <br />
        I love running, playing football, sailing, bird-watching.
        I also like cinema and reading paper books.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; {`${REACT_APP_MY_NAME} ${REACT_APP_MY_SURNAME}`} <Link to="/">{`${REACT_APP_MY_DOMAIN}`}</Link>.</p>
    </section>
  </section>
);

export default SideBar;
