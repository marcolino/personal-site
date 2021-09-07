import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { withNamespaces } from 'react-i18next'; // the HOC
import './static/css/main.scss'; // all of our styles

const { PUBLIC_URL } = process.env;

const Loading = () => ( // TODO ...
  <></>
);

// const lazyDelayed = (path, delay = 3000) => (
//   lazy(() => Promise.all([
//     import(path),
//     new Promise((resolve) => setTimeout(resolve, delay)), // ensures minimal delay
//   ]).then(([module]) => module))
// );

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Resume = lazy(() => import('./pages/Resume'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Stats = lazy(() => import('./pages/Stats'));
const Events = lazy(() => import('./pages/Events'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter basename={PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/stats" component={Stats} />
        <Route path="/events" component={Events} />
        <Route component={NotFound} status={404} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

// export default App;
export default withNamespaces()(App);
