import React, { Fragment } from 'react';
import { hydrate, render } from 'react-dom';
import './i18n';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <>
    <App />
  </>
);

const rootElement = document.getElementById('root');

// hydrate is required by react-snap
if (rootElement.hasChildNodes()) {
  hydrate(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}
