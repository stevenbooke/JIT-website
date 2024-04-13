import React from 'react';
import "./Navigation.css";
import SvgJitLogo from '../svg/jit-logos-adobe-png-to-svg/JitLogo';
import SvgJitWebsiteLayoutFrames1 from '../svg/jit-website-layout-frames-adobe-png-to-svg/JitWebsiteLayoutFrames1';
import navbarBackgroundsvg from "../../assets/svg/jit-website-layout-frames-adobe-png-to-svg/jit-website-layout-frames-1.svg";
import { Link as LinkScroll, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
  };

const scrollToTop = () => {
    scroll.scrollToTop(options);
};


const Navigation = () => {
    return (
        <header className="fixed-top site__header" style={{ backgroundSize: 'cover', backgroundImage: `url(${navbarBackgroundsvg})` }}>
            {/* <SvgJitWebsiteLayoutFrames1 className="nav-background" style={{position: 'fixed'}}/> */}
            <div className="d-flex align-items-center justify-content-between">
                {/* <SvgJitWebsiteLayoutFrames1 className="nav-background" style={{position: 'fixed'}}/> */}
                <SvgJitLogo className="navbar-brand nav_ac" onClick={scrollToTop} />
                <div className="d-flex align-items-center">
                    {/* <Themetoggle /> */}
                    <LinkScroll className="nav_ac" to="critical" spy={true} smooth={true} duration={500}>Critical Text</LinkScroll>
                    <LinkScroll className="nav_ac" to="about" spy={true} smooth={true} duration={500}>About</LinkScroll>
                    <LinkScroll className="nav_ac" to="roadmap" spy={true} smooth={true} duration={500}>Roadmap</LinkScroll>
                    <LinkScroll className="nav_ac" to="buy" spy={true} smooth={true} duration={500}>How to Buy</LinkScroll>
                </div>
            </div>
        </header>
    );
};

export default Navigation;