import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom' 
import HeroSection from './components/HeroSection';
function App() {
  return (
    <Router>
    <Fragment>
      <Navbar />
      <HeroSection />
    </Fragment>
    </Router>
  );
}

export default App;
