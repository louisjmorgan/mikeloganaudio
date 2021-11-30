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
import backupData from './backupData.json';

const App = () => {
  const [siteData, setData] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const fetchData = async () => {
    fetch(
      'https://mikeloganaudio-2f44f-default-rtdb.europe-west1.firebasedatabase.app/.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data['1KhBayKFTeDi5E0wSauJpHClpL5Agky3qyK8lbLVJ7D8']);
        setLoaded(true);
      })
      .catch((err) => {
        setData(
          backupData['1KhBayKFTeDi5E0wSauJpHClpL5Agky3qyK8lbLVJ7D8']
        );
        setLoaded(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Nav />
        <ScrollToTop />
        <Switch>
          <Route path="/reels">
            {isLoaded ? <Reels data={siteData.Reels} /> : ''}
          </Route>
          <Route path="/more-content">
            {isLoaded ? (
              <MoreContent data={siteData.MoreContent} />
            ) : (
              ''
            )}
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
