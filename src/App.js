import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from './components/nav/Navigation';
import CriticalText from './components/critical/CriticalText';
import About from './components/about/About';
import Roadmap from './components/roadmap/Roadmap';
import Buy from './components/buy/Buy';
import Footer from './components/footer/Footer';
import SvgJitWebsiteLayoutFrames1 from './components/svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames1';

const App = () => {
  return (
    <div className='d-flex flex-column w-100'>
      <Navigation />
      <CriticalText />
      <About />
      <Roadmap />
      <Buy />
      <Footer />
    </div>
  );
};

export default App;