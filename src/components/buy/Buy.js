import React from 'react';
import "./Buy.css";
import frame5widesvg from "../../assets/svg/jit-website-layout-frames-objective-svg/jit-website-layout-frames-5-wide.svg";
import { Element } from 'react-scroll';
import { buy } from '../../content-options';

const FRAME_5_WIDTH = 1920;
const FRAME_5_HEIGHT = 483;
const FRAME_5_ASPECT_RATIO = FRAME_5_HEIGHT / FRAME_5_WIDTH;

const Buy = () => {
    return (
        <Element name="buy">
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${frame5widesvg})`, minHeight: '483px' }}>
                <div className='buy-container'>
                    <span style={{ fontSize: '2.75em', color: "#497FF5" }}>{buy.title}</span>
                    <br></br>
                    <span style={{ fontWeight: 'bold', fontSize: '1.5em', color: "#fff", marginBottom: '1vh' }}>{buy.h1}</span>
                    <span>{buy.content1} </span>
                    <br></br>
                    <span style={{ fontWeight: 'bold', fontSize: '1.5em', color: "#fff", marginBottom: '1vh' }}>{buy.h2}</span>
                    <span>{buy.content2} </span>
                    <br></br>
                    <span style={{ fontWeight: 'bold', fontSize: '1.5em', color: "#fff", marginBottom: '1vh' }}>{buy.h3}</span>
                    <span>{buy.content3} </span>
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