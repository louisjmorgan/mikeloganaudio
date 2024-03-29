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
import Film from './Components/FilmAudio';
import GameAudio from './Components/GameAudio';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './ScrollToTop';
import FreeSfx from './Components/FreeSFX';
import './index.scss';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route path="/film-audio">
            <Film />
          </Route>
          <Route path="/game-audio">
            <GameAudio />
          </Route>
          <Route path="/free-sfx">
            <FreeSfx />
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
