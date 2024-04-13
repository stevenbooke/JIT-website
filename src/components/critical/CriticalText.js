import React from 'react';
import "./CriticalText.css";
// import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames2';
import SvgJitWebsiteLayoutFrames2 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames2';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const CriticalText = () => {
    return (
        <Element name="critical">
            <section className="critical-text-container">
                <SvgJitWebsiteLayoutFrames2 className="critical-text-background" /> {/* SVG background */}
                {/* Your critical text content here */}
            </section>
        </Element>
    );
};

export default CriticalText;