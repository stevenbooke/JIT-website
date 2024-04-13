import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from './components/nav/Navigation';
import CriticalText from './components/critical/CriticalText';
import About from './components/about/About';
import Roadmap from './components/roadmap/Roadmap';
import Buy from './components/buy/Buy';
import Footer from './components/footer/Footer';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const App = () => {
  return (
      <main>
        <Navigation />
        <CriticalText/>
        <About/>
        <Roadmap/>
        <Buy/>
        <Footer/>
      </main>
  );
};

export default App;