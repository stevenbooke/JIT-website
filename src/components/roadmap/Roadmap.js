import React from 'react';
import "./Roadmap.css";
import frame4svg from "../../assets/images/jit/JIT-website_DESKTOP-frames-slide4.png";
import { Element } from 'react-scroll';
import { roadmap } from '../../content-options';
import bulletpoint from "../../assets/svg/jit-logos-objective-svg/bullet-point.svg";
import bulletmap from "../../assets/images/jit/jit-slide4-element-white.png";
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

            <img src={bulletmap} alt="Bullet Map" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
            <ul style={{ listStyleType: 'none', padding: '0px' }}>
              {roadmap.headers.map((header, index) => (
                <React.Fragment key={index}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <img
                      src={bulletpoint}
                      alt="Bullet Point"
                      style={{ marginTop: '5px', width: '13px', height: '13px', marginRight: '10px' }}
                    />
                    <div style={{ fontFamily: 'Rubik", sans-serif', flex: 1, textAlign: 'left', fontWeight: 'bold' }}>
                      {header}
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px', marginLeft: '23px' }}>
                    <div style={{ fontFamily: 'Rubik", sans-serif', flex: 1, textAlign: 'left' }}>
                      {roadmap.content[index]}
                    </div>
                  </li>
                </React.Fragment>
              ))}
                          <br></br>
            <span style={{marginLeft:'23px', color:'#ec8731', fontWeight:'bold', fontFamily: 'Rubik", sans-serif', flex: 1, justifyContent: 'middle', textAlign:'middle'}}>Stay tuned on X!</span>
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