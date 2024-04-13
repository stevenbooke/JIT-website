import React from 'react';
import "./Roadmap.css";
import SvgJitWebsiteLayoutFrames4 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames4';
// import SvgJitWebsiteLayoutFrames4 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames4';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Roadmap = () => {
  return (
    <Element name="roadmap">
    <section className="roadmap-container">
      <SvgJitWebsiteLayoutFrames4 className="roadmap-background" /> {/* SVG background */}
      {/* Your about text content here */}
    </section>
    </Element>
  );
};

export default Roadmap;