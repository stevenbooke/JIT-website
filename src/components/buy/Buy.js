import React from 'react';
import "./Buy.css";
import frame5widesvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-5-wide.svg";
import { Element } from 'react-scroll';

const FRAME_5_WIDTH = 1920;
const FRAME_5_HEIGHT = 483;
const FRAME_5_ASPECT_RATIO = FRAME_5_HEIGHT / FRAME_5_WIDTH;

const Buy = () => {
    return (
        <Element name="buy">
            <div className="container-fluid text-center g-0 ratio" style={{ backgroundSize: 'cover', backgroundImage: `url(${frame5widesvg})`, '--bs-aspect-ratio': `${FRAME_5_ASPECT_RATIO * 100}%` }}>
                <div className="row row-cols-1 align-content-center">
                    <div className="col">
                        <h1 className="fw-bold fs-1">HOW TO BUY/IN MEDIA/TESTIMONIALS</h1>
                    </div>
                    <div className="col">
                        <span className="fw-bold fs-1">PLACEHOLDER: </span>
                        <span className="fw-light fs-2">some text</span>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Buy;






// import React from 'react';
// import "./Buy.css";
// import SvgJitWebsiteLayoutFrames5Wide from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames5Wide';
// // import SvgJitWebsiteLayoutFrames5 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames5';
// // import SvgJitWebsiteLayoutFrames5 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames5';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


// const Buy = () => {
//     return (
//         <Element name="buy">
//             <section className="buy-container">
//                 <SvgJitWebsiteLayoutFrames5Wide className="buy-background" /> {/* SVG background */}
//                 {/* Your about text content here */}
//             </section>
//         </Element>
//     );
// };

// export default Buy;