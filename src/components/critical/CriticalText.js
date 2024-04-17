import React from 'react';
import "./CriticalText.css";
import frame2svg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-2.svg";
import { Element } from 'react-scroll';
import {
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";
import { social_links } from "../../content-options";

const FRAME_2_WIDTH = 1920;
const FRAME_2_HEIGHT = 294;
const FRAME_2_ASPECT_RATIO = FRAME_2_HEIGHT / FRAME_2_WIDTH;

const CriticalText = () => {
  return (
    <Element name="critical" >
      <div className="container-fluid text-center g-0 ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame2svg})`, '--bs-aspect-ratio': `${FRAME_2_ASPECT_RATIO * 100}%` }}>
          <div className="row row-cols-1 align-content-center">
            <div className="col">
              <span className="me-1">
                {social_links.XTwitter && (
                  <a href={social_links.XTwitter}>
                    <FaXTwitter size={'2em'} color={'white'}/>
                  </a>
                )}
              </span>
              <span className="ms-1">
                {social_links.discord && (
                  <a href={social_links.discord}>
                    <FaDiscord size={'2em'} color={'white'}/>
                  </a>
                )}
              </span>
            </div>
            <div className="col">
              <span className="fw-bold fs-1">CA: </span>
              <span className="fw-light fs-2">aaaaaaaaaaaaaaaaaa</span>
            </div>
          </div>
      </div>
    </Element>
  );
};

export default CriticalText;



// import React from 'react';
// import "./CriticalText.css";
// import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames2';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// const CriticalText = () => {
//   return (
//       <Element name="critical" style={{position: 'relative'}}>
//         <div className="critical-text-content" style={{position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, zIndex: 1}}> {/* Content container */}
//           <h1>This is the Critical Text Section</h1>
//           <p>Add your content here, styled appropriately.</p>
//         </div>
//         <SvgJitWebsiteLayoutFrames2 className="critical-text-background" width={'100%'} height={'100%'} /> {/* SVG background */}
//       </Element>
//   );
// };

// export default CriticalText;