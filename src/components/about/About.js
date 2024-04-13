import React from 'react';
import "./About.css";
import SvgJitWebsiteLayoutFrames3 from '../svg/jit-website-layout-frames-objective-svg/JitWebsiteLayoutFrames3';
// import SvgJitWebsiteLayoutFrames3 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames3';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



const About = () => {
    return (
        <Element name="about">
            <section className="about-container">
                <SvgJitWebsiteLayoutFrames3 className="about-background" /> {/* SVG background */}
                {/* Your about text content here */}
            </section>
        </Element>
    );
};

export default About;