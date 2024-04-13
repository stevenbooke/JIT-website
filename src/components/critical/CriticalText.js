import React from 'react';
import "./CriticalText.css";
import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames2';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const CriticalText = () => {
  return (
      <Element name="critical" style={{position: 'relative'}}>
        <div className="critical-text-content" style={{position: 'absolute', width: '100%', height: 'auto', top: 0, left: 0, zIndex: 1}}> {/* Content container */}
          <h1>This is the Critical Text Section</h1>
          <p>Add your content here, styled appropriately.</p>
        </div>
        <SvgJitWebsiteLayoutFrames2 className="critical-text-background" width={'100%'} height={'100%'} /> {/* SVG background */}
      </Element>
  );
};

export default CriticalText;




// import React from 'react';
// import "./CriticalText.css";
// // import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames2';
// import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames2';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


// const CriticalText = () => {
//     return (
//         <Element name="critical">
//             <section className="critical-text-container">
//                 <SvgJitWebsiteLayoutFrames2 className="critical-text-background" /> {/* SVG background */}
//                 {/* Your critical text content here */}
//             </section>
//         </Element>
//     );
// };

// export default CriticalText;