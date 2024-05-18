import React from 'react';
import "./Buy.css";
import frame5widesvg from "../../assets/images/jit/JIT-website_DESKTOP-frames-slide3.png";


import { Element } from 'react-scroll';
import { buy } from '../../content-options';



const Buy = () => {

    return (
        <Element name="buy">
            
            <div style={{ display: 'flex', flexDirection: 'column', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${frame5widesvg})`, minHeight: '793px' }}>
                <div className='buy-container-image'>
                    <div className='buy-container'>
                        <span className='buy-title'>{buy.title}</span>
                    </div>
                    <ul>
                        {buy.headers.map((header, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px', paddingLeft:'45px' }}>
                            <div style={{ paddingLeft: '10px', color: '#4680f6' }}>•&nbsp;</div>
                            <div>
                            <span style={{ color: 'white'}}>{header}</span>{' '}
                            <span style={{ color: 'black' }}>&nbsp;{buy.content[index]}</span>
                            </div>
                        </li>
                        ))}
                    </ul>
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