import React from 'react';
import "./Buy.css";
import SvgJitWebsiteLayoutFrames5Wide from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames5Wide';
// import SvgJitWebsiteLayoutFrames5 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames5';
// import SvgJitWebsiteLayoutFrames5 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames5';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const Buy = () => {
    return (
        <Element name="buy">
            <section className="buy-container">
                <SvgJitWebsiteLayoutFrames5Wide className="buy-background" /> {/* SVG background */}
                {/* Your about text content here */}
            </section>
        </Element>
    );
};

export default Buy;