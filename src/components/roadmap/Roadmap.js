import React from 'react';
import "./Roadmap.css";
import frame4svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-4.svg";
import { Element } from 'react-scroll';
const Latex = require('react-latex');

const FRAME_4_WIDTH = 1920;
const FRAME_4_HEIGHT = 811;
const FRAME_4_ASPECT_RATIO = FRAME_4_HEIGHT / FRAME_4_WIDTH;

const tokenDistributionFx = `$tokens = \\frac{total\\_tokens}{ln(1 + Y )} \\cdot ln \\left( 1 + \\frac{contribution}{Y} \\right) \\cdot multiplier$`;

const Roadmap = () => {
  return (
    <Element name="roadmap">
      <div className="container-fluid g-0 ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame4svg})`, '--bs-aspect-ratio': `${FRAME_4_ASPECT_RATIO * 100}%` }}>
        <div className="row row-cols-1 align-content-center text-center">
          <div className="col">
            <p className="m-0 fw-bold fs-1">ROADMAP HEADER</p>
          </div>
          <div className="col">
            {/* <Latex>{"$f(x) = \\int_{-\\infty}^{\\infty} e^{-x^2} dx$"}</Latex> */}
            <Latex>
              {tokenDistributionFx}
            </Latex>
          </div>
          <div className="col">
            <p className="m-0 fw-light fs-6">ROADMAP DETAILS</p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Roadmap;







// import React from 'react';
// import "./Roadmap.css";
// import SvgJitWebsiteLayoutFrames4 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames4';
// // import SvgJitWebsiteLayoutFrames4 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames4';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// const Roadmap = () => {
//   return (
//     <Element name="roadmap">
//     <section className="roadmap-container">
//       <SvgJitWebsiteLayoutFrames4 className="roadmap-background" /> {/* SVG background */}
//       {/* Your about text content here */}
//     </section>
//     </Element>
//   );
// };

// export default Roadmap;