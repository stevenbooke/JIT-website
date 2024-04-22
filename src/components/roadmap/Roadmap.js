import React from 'react';
import "./Roadmap.css";
import frame4svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-4.svg";
import { Element } from 'react-scroll';
import { roadmap } from '../../content-options';
import bulletpoint from "../../assets/svg/jit-logos-objective-svg/bullet-point.svg";
const Latex = require('react-latex');

const FRAME_4_WIDTH = 1920;
const FRAME_4_HEIGHT = 811;
const FRAME_4_ASPECT_RATIO = FRAME_4_HEIGHT / FRAME_4_WIDTH;

const tokenDistributionFx = `$tokens = \\frac{total\\_tokens}{ln(1 + Y )} \\cdot ln \\left( 1 + \\frac{contribution}{Y} \\right) \\cdot multiplier$`;

const Roadmap = () => {
  return (
    <Element name="roadmap">
      <div className="container-fluid g-0 ratio" style={{ backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${frame4svg})`, minHeight: '811px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="roadmap-container" >
            <p className='roadmap-header'>{roadmap.title}</p>
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              {roadmap.content.map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start', // Ensures bullet points align with the first line of text
                  marginBottom: '10px' // Adds space between list items
                }}>
                  <img src={bulletpoint} alt="Bullet Point" style={{
                    marginTop: '5px',
                    width: '13px', // Adjust the size of the bullet image as necessary
                    height: '13px', // Adjust the size of the bullet image as necessary
                    marginRight: '10px' // Space between the bullet point and the text
                  }} />
                  <div style={{ fontFamily: 'Rubik", sans-serif', flex: 1, textAlign: 'left' }}>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
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