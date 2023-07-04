/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Components/Home';
import Reels from './Components/Reels';
import MoreContent from './Components/MoreContent';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route path="/reels">
            <Reels />
          </Route>
          <Route path="/more-content">
            <MoreContent />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
